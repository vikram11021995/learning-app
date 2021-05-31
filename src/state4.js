import React, { Component } from 'react';
class State4 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            mobile: '',
            city: '',
            age: '',
            userlist: [
                { "name": "Harish", "mobile": 888888, "city": "Pune", "age": "20 Years" }
            ],
            citylist: ["Pune", "Delhi", "Mumbai", "Chennai", "Bangalore"]
        }
    }

    processName = (obj) => {
        this.setState({ name: obj.target.value })
    }
    processMobile = (obj) => {
        this.setState({ mobile: obj.target.value })
    }
    processCity = (obj) => {
        this.setState({ city: obj.target.value })
    }
    processAge = (obj) => {
        this.setState({ age: obj.target.value })
    }

    save = () => {
        let newuser = {
                        "name": this.state.name,
                         "mobile": this.state.mobile,
                         "city": this.state.city,
                         "age": this.state.age
        };
        this.setState({
                        userlist: this.state.userlist.concat(newuser),
                        name: '',
                        mobile: '',
                        city: '',
                        age: ''
        })
    }

    deleteUser = (userindex) =>{
            this.state.userlist.splice(userindex, 1);
            this.setState({
                userlist: this.state.userlist
            })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>React Js Multi Dimensional Array State Management</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h4 className="text-primary">New User</h4>

                    <div className="form-group">
                        <label>Enter Your Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.processName} />
                    </div>
                    <div className="form-group">
                        <label>Enter Your Mobile No</label>
                        <input type="text" className="form-control" value={this.state.mobile} onChange={this.processMobile} />
                    </div>
                    <select className="form-control" value={this.state.city} onChange={this.processCity}>
                        <option>Choose City</option>
                        {
                            this.state.citylist.map((xcity, index) => {
                                return <option key={index}>{xcity}</option>
                            })
                        }
                    </select>
                    <div className="form-group">
                        <label>Enter Age</label>
                        <input type="text" className="form-control" value={this.state.age} onChange={this.processAge} />
                    </div>
                    <button className="btn btn-danger m-2" onClick={this.save}>Save</button>
                </div>
                <div className="col-md-9">
                    <h4 className="text-center text-success">Available Users</h4>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>SI No</th>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>City</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userlist.map((cval, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{cval.name}</td>
                                        <td>{cval.mobile}</td>
                                        <td>{cval.city}</td>
                                        <td>{cval.age}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm text-center" onClick={this.deleteUser.bind(this, index)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }

}

export default State4;