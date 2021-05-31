import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {
    constructor() {
        super();
        this.state = {
            city: [],
            personlist: []
        }
    }

    getData = () => {
        axios.get("citylist.json").then(response=>{
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
            personlist:this.state.city[index].person
        })
    }



    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-3 text-center">
                    <div className="text-white">
                        <h4>Available City : - {this.state.city.length}</h4>
                        {
                            this.state.city.map((xitem, index) => {
                                return <button className="btn btn-primary text-white" key={index} onClick={this.getPersonlist.bind(this, index)}>
                                    {xitem.city} has {xitem.person.length} person </button>
                            })
                        }
                    </div>
                    <div className="col-md-9 text-center">
                        <div className="bg-success p-3">
                            <h4>Available People</h4>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    {
                                        this.state.personlist.map((x, index) => {
                                            return <label key={index}>{x}</label>
                                        })
                                    }
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

}


export default API;