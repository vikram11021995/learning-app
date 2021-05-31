import React, { Component } from 'react';
import axios from 'axios';

class MyApi3 extends Component {

    constructor() {
        super();
        this.state = {
            citylist: [],
            personlist: []
        }
    }

    getData = () => {
        axios.get("citylist.json").then(response => {
            this.setState({
                city: response.data
            })
        })
    }




    componentDidMount() {
        this.getData();
    }

    getPersonlist = (index) => {
        this.setState({
            personlist: this.state.city[index].person
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-3 text-center">
                    <div className="bg-warning rounded  p-3 text-white">
                        <h5>Available City :- {this.state.city.length}</h5>
                        {
                            this.state.city.map((xitem, index) => {
                                return <button className="btn btn-danger text-white m-3" key={index} onClick={this.getPersonlist.bind(this, index)}>
                                    {xitem.city} has {xitem.personlist.length} persons</button>
                            })
                        }

                    </div>
                </div>
                <div className="col-md-9  text-center rounded">
                    <div className="bg-success  p-3">
                        <h4>Available People</h4>
                        <div className="row text-center">
                            <div className="col-md-3"></div>
                            <div className="col-md-3 ">
                                {
                                    this.state.personlist.map((xitem, index) => {
                                        return <label className="text-white border bg-info m-2 p-2" key="index">{xitem}</label>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default MyApi3;