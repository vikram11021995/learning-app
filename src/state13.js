import React, { Component } from 'react';
import { link } from 'react-router-dom';

class State13 extends Component {
    constructor() {
        super();
        this.state = {
            cityname: "Bangalore"
        }

    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-success">Map() on string variable</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                {
                    this.state.cityname.split("\n").map((x, index) => {
                        return <p key={index} className="border p-3">{x}</p>
                    })
                }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    }
}

export default State13;
