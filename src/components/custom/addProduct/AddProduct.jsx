import React from 'react'
import './addProduct.css'
import defaultImage from './default.png'
import axios from 'axios'

const AddProduct = () => {

    const [category, setCategory] = React.useState("")
    const [categories, setCategories] = React.useState([])

    const [image, setImage] = React.useState("")

    React.useEffect(() => {


        const options = { method: 'GET', url: 'https://dummyjson.com/products/categories' };

        axios.request(options).then(function (response) {
            setCategories(response.data)
        }).catch(function (error) {
            console.error(error);
        });


    }, [])

    return (
        <div className='addProduct-wrapper'>
            <div className="heading">Add Product</div>

            <div className="product-infos">
                <div className="media">
                    <img src={image === "" ? defaultImage : image} alt="not found" />
                    <input type="file" onChange={e => setImage(URL.createObjectURL(e.currentTarget.files[0]))} />
                </div>
                <div className="desc">
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text" />
                    </div>

                    <div className="price">
                        <label htmlFor="price">Price</label>
                        <input type="number" />
                    </div>
                    <div className="category">
                        <label htmlFor="category">Category</label> <br />
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

            </div>
            <button>Save</button>

        </div>
    )
}

export default AddProduct