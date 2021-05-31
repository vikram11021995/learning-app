import React , {Component} from 'react';
import axios from 'axios';

class ApiTwo extends Component{
    constructor(){
        super();
        this.state = {
            userList:[]
        }
    }

    getUser = () =>{
        axios.get("user.json").then(citydata=>{
            this.setState({
                userList : citydata.data
            })
        })
    }

    componentDidMount(){
        this.getUser();
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-sm">
                        <thead>
                            <th>SI No</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Age</th>
                        </thead>
                        <tbody>
                            {
                                this.state.userList.map((cval, index)=>{
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{cval.name}</td>
                                        <td>{cval.mobile}</td>
                                        <td>{cval.age}</td>

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

export default ApiTwo;