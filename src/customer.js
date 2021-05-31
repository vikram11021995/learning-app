import React, { Component } from 'react';
class CustomerList extends Component {
    allCustomer = [];
    myCustomer = [];

    constructor() {
        super();
        this.allCustomer = [
            { "name": "Alex", "city": "Pune", "mobile": 999999999 },
            { "name": "Vikram", "city": "Patna", "mobile": 9760055570 },
            { "name": "Linux", "city": "Chennai", "mobile": 7088286941 },
            { "name": "Ganesh", "city": "Kota", "mobile": 9999999999 },
            { "name": "Unix", "city": "Ranchi", "mobile": 9999999999 }
        ];
        this.myCustomer = ["Vikram", "Vaibhav", "Tanveer", "Favas", "Saqib"];
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Customer List</h2>
                    <p>This is from class component</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Customer List</h2>
                    <p>This is from class component</p>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>SI No</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.allCustomer.map((row, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{row.name}</td>
                                        <td>{row.city}</td>
                                        <td>{row.mobile}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-primary">Customer List</h1>
                    {
                        this.myCustomer.map((row, index) => {
                            return <p key={index}>{row}</p>
                        })
                    }
                </div>
            </div>
        </div>
    }
}

export default CustomerList;

