import React, { Component } from 'react';
import axios from 'axios';

class MyApi1 extends Component {
    constructor() {
        super();
        this.state = {
            customer: [],
            product: [],
            book: []
        }
    }

    getCustomer = () => {
        axios.get("customer.json").then(userdata => {
            this.setState({
                customer: userdata.data
            })
        })
    }

    getProduct = () => {
        axios.get("product.json").then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    getBook = () => {
        axios.get("book.json").then(response => {
            this.setState({
                book: response.data
            })
        })
    }

    componentDidMount() {
        this.getProduct();
    } 

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <button className="btn btn-primary m-3" onClick={this.getCustomer}>Show Customer</button>
                    <h2>Available Customer : {this.state.customer.length}</h2>
                        {
                            this.state.customer.map((cval, index)=>{
                                return <p key={index}>{cval}</p>
                            })
                        }
                    <h2>Available Products : {this.state.product.length}</h2>
                        {
                            this.state.product.map((cval, index) =>{
                                return <p key={index}>{cval}</p>
                            })
                        }
                </div>
            </div>
            <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-primary m-3" onClick={this.getBook}>Show Book</button>
                            <h2>Available Book : {this.state.book.length}</h2>
                            {
                                this.state.book.map((cval, index)=>{
                                    return <p key={index}> {cval} </p>
                                })
                            }
                        </div>
            </div>
        </div>
    }
}

export default MyApi1;

