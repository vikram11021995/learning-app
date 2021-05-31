import React, { Component } from 'react';
class MyState extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            cityname: 'Bangalore',
            gender : ''
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    processName = (obj) => {
        this.setState({
            cityname : obj.target.value
        })
    }

    processGender = (xyz) => {
        this.setState({
            gender : xyz.target.value
        })
    }


    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2 className="text-success">{this.state.cityname}</h2>
                    <label>Enter City Name</label>
                    <input type="text" className="form-control" onChange={this.processName} />
                </div>
                <div className="col-md-3">
                    <h2 className="text-warning">You are : {this.state.gender}</h2>
                    <p>
                        <input type="radio" name="abc" value="Male" onChange={this.processGender} /> Male
                        <input type="radio" name="abc" value="Female" onChange={this.processGender} /> Female
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <h2>Simple State Example</h2>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.updateCounter} className="btn btn-primary m-3">Increase The Counter</button>
                </div>
            </div>
        </div>
    }
}

export default MyState;