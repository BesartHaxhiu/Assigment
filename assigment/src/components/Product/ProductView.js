import React from 'react'

const ProductView = () => {
    const data = [
        {
            "id": "1",
            "title": "Sleep",
            "price": 1000,
            "date": "24/01/42",
            "stock": 5
        },        
        {
            "id": "2",
            "title": "Sleep2",
            "price": 1001,
            "date": "24/01/42",
            "stock": 6
        }
    ]
    return (
        <div className="container">
        <table class="table my-5">
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
            {data.map(item => {
                return (
                    <>
                    <tr>
                <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.date}</td>
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
