import React,{useState,useEffect } from 'react';
import axios from 'axios';
import './Product.css';


const ProductView = () => {

    const [product,setProduct] = useState([''])
    
    const fetchProducts = async () => {
        try{
            await axios.get('http://localhost:5000/api/products')
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">
        <h4 className="text-center mt-5">Table of products</h4>
        <table className="table my-5 product-table" >
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Stock</th>
            </tr>
        </thead>
        <tbody>
            {product.map(item => {
                return (
                    <>
                    <tr>
                <th scope="row">{item._id}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.publish_date}</td>
                    <td>{item.stock}</td>
                    </tr>
                    </>
                )
                })
            }
        </tbody>
        </table>           
        </div>
    )
}

export default ProductView
