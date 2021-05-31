import React, { Component } from 'react';
class State11 extends Component {
    constructor() {
        super();
        this.state = {
            location: ["Bangalore", "Pune", "Mumbai", "Chennai", "Kolkata"]
        }
    }

    pickcity = (object) => {
        this.setState({
            mycity:object.target.value
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-success">Available City : {this.state.location.length}</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3"></div>

                    <div className="col-md-6">
                        <select onChange={this.pickcity} className="form-control">
                            <option value="">---Choose---</option>
                            {
                                this.state.location.map((xcity, index) => {
                                    return <option key={index}> {xcity} </option>
                                })
                            }
                        </select>
                        <h1 className="text-danger text-center mt-3">
                            Your City is : {this.state.mycity}
                        </h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                </div>
    
    }
}

export default State11;