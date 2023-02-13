import React from 'react'
import { Card } from '../../mui/exports'
import axios from "axios";
import './products.css'

const Products = () => {

    const [products, setProducts] = React.useState([])
    const [query, setQuery] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [categories, setCategories] = React.useState([])
    const [lowerPrice, setLowerPrice] = React.useState("")
    const [upperPrice, setUpperPrice] = React.useState("")

    React.useEffect(() => {
        const options = { method: 'GET', url: 'https://dummyjson.com/products' };

        axios.request(options).then(function (response) {
            setProducts(response.data.products)
        }).catch(function (error) {
            console.error(error);
        });


        const options2 = { method: 'GET', url: 'https://dummyjson.com/products/categories' };

        axios.request(options2).then(function (response) {
            setCategories(response.data)
        }).catch(function (error) {
            console.error(error);
        });


    }, [])


    function searchProduct() {

        const options = {
            method: 'GET',
            url: 'https://dummyjson.com/products/search',
            params: { q: query }
        };

        axios.request(options).then(function (response) {
            setProducts(response.data.products)
        }).catch(function (error) {
            console.error(error);
        });
        setQuery("")
    }

    function getCategory() {

        const options = { method: 'GET', url: `https://dummyjson.com/products/category/${category}` };

        axios.request(options).then(function (response) {
            if (lowerPrice !== "" && upperPrice !== "") {
                let categorizedProducts = response.data.products
                setProducts(filterPrice(categorizedProducts))
            }
            else {

                setProducts(response.data.products)
            }
        }).catch(function (error) {
            console.error(error);
        });


    }

    function filterPrice(categorizedProducts) {
        let newProducts = []
        for (let i = 0; i < categorizedProducts.length; i++) {
            if (categorizedProducts[i].price >= lowerPrice && categorizedProducts[i].price <= upperPrice) {
                newProducts.push(categorizedProducts[i])
            }
        }

        return newProducts
    }

    function filter() {
        if(category!==""){
            getCategory()
        }else{
            setProducts(filterPrice(products))
        }

        setCategory("")
        setUpperPrice("")
        setLowerPrice("")
    }


    return (
        <>
            <div className='searchFilter-wrapper'>
                <div className="search-bar">
                    <input type="text" placeholder='search' value={query} onChange={e => setQuery(e.currentTarget.value)} />
                    <button type="submit" className='btn-light' onClick={searchProduct} >Search</button>
                </div>
                <div className="filter-bar">
                    <div className="price-range">
                        <label >Price Range</label>
                        <input type="number" id='price-lower' value={lowerPrice} onChange={e => setLowerPrice(e.currentTarget.value)} /> to <input type="number" id='price-upper' value={upperPrice} onChange={e => setUpperPrice(e.currentTarget.value)} />
                    </div>
                    <div className="category">
                        <label htmlFor="category">Category</label>
                        <select name="" id="category" value={category} onChange={e => setCategory(e.currentTarget.value)} >
                            <option default value="">None</option>
                            {
                                categories && categories.map(category => {
                                    return (
                                        <option key={category} value={category}>{category}</option>
                                    )
                                })
                            }
                        </select>

                    </div>

                </div>
                <button className='btn-light' onClick={filter}>Filter</button>
            </div>
            <div className='wrapper'>
                {
                    products && products.map((product) => {
                        return (
                            <Card key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products