import React from 'react'
import './orders.css'
import axios from 'axios'

const Orders = () => {

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        const options = { method: 'GET', url: 'https://dummyjson.com/products' };

        axios.request(options).then(function (response) {
            setOrders(response.data.products)
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    function handleDispatch(id) {
        console.log(id);
        for(let i=1;i<orders.length;i++){
            if(id===orders[i].id){
                orders.splice(i,1)
                console.log(orders[i]);
            }
        }
    }


    return (
        <div className='orders-wrapper'>
            <div className="heading">ORDERS</div>

            <div className="orders">
                <table>
                    <thead>
                        <tr>
                            <th  >Product ID</th>
                            <th  >Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(order => {
                                return (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.title}</td>
                                        <td>3</td>
                                        <td>
                                            <button onClick={e=>handleDispatch(order.id)}>
                                                Dispatch
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Orders