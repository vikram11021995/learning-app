import React, { Component } from "react";
import "./style.css";

class State12 extends Component {
  constructor() {
    super();
    this.state = {
      location: ["Bangalore", "Pune", "Mumbai", "Chennai", "Kolkata"],
      mycity: "",
    };
  }

  pickcity = (object) => {
    this.setState({
      mycity: object.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-success">
              Available City : {this.state.location.length}
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <select onChange={this.pickcity} className="form-control">
              <option value="">---Choose---</option>
              {this.state.location.map((xcity, index) => {
                return <option key={index}> {xcity} </option>;
              })}
            </select>
            <h1 className="text-danger text-center mt-3">
              Your City is : {this.state.mycity}
            </h1>
            <button className="btn btn-primary btn-block mt-3">
              The Length of - {this.state.mycity} - {this.state.mycity.length}
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default State12;
