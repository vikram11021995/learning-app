import React from 'react';

const allProduct = [
    { "name": "Mobile", "price": 200, "qty": 15 },
    { "name": "Apple", "price": 200, "qty": 51 },
    { "name": "Water", "price": 200, "qty": 53 },
    { "name": "Cell Phone", "price": 200, "qty": 55 },
    { "name": "Milk", "price": 200, "qty": 25 },
    { "name": "Chair", "price": 200, "qty": 55 },
    { "name": "Book", "price": 200, "qty": 53 }
];
const user = [
    { "fullname": "Ganesh", "age": "20 Years", "city": "Pune", "edu": "MCA" },
    { "fullname": "Ramesh", "age": "21 Years", "city": "Patna", "edu": "BCA" },
    { "fullname": "Suresh", "age": "22 Years", "city": "Kolkata", "edu": "BCOM" },
    { "fullname": "Alex", "age": "23 Years", "city": "Delhi", "edu": "MCA" },
    { "fullname": "Ravi", "age": "24 Years", "city": "Chennai", "edu": "CA" },
    { "fullname": "Mohit", "age": "25 Years", "city": "Hyderabad", "edu": "BCA" }

];

const ProductList = () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>{allProduct.length} -: Product List</h2>
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>SI No</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProduct.map((row, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.price * row.qty}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>{user.length} -: User List</h2>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th>Education</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((row, index)=>{
                                        return <tr key={index}>
                                            <td>{row.fullname}</td>
                                            <td>{row.age}</td>
                                            <td>{row.city}</td>
                                            <td>{row.edu}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    </div>
}

export default ProductList;