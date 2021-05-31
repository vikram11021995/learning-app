import React, { Component } from 'react';
class MyState2 extends Component {
    constructor() {
        super();
        this.state = {
            citylist: ["Pune", "Mumbai", "Chennai"],
            newcity: "Delhi",
            message: ''
        }
    }

    processCity = (obj) => {
        this.setState({
            newcity: obj.target.value
        })
    }

    save = () => {
        this.setState({
            citylist: this.state.citylist.concat(this.state.newcity),
            message: this.state.newcity + ' - Added Successfully !',
            newcity: ''
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Array Data Binding Using State</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="text-center text-danger">{this.state.message}</p>
                    <div className="form-group">
                        <label>Enter City Name</label>
                        <input type="text" className="form-control" onChange={this.processCity} />
                    </div>
                    <button className="btn btn-primary m-2" onClick={this.save}>Add City</button>

                    <h3 className="text-success text-center">{this.state.citylist.length} - Available City</h3>
                        {
                            this.state.citylist.map((mycity, index)=>{
                                return <p className="border p-2" key={index}> {mycity} </p>
                            })
                        }
                </div>
                <div className="col-md-3"></div>

            </div>
        </div>
    }
}

export default MyState2;