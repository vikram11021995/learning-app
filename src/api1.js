import React , {Component} from 'react';
import axios from 'axios';

class ApiOne extends Component{
    constructor(){
        super();
        this.state = {
            cityList:[],
            stateList: []
        }
    }

    getCity = () =>{
        axios.get("city.json").then(citydata=>{
            this.setState({
                cityList : citydata.data
            })
        })
    }

    componentDidMount(){
        this.getCity();
        this.getState();

    } 

    getState = () =>{
        axios.get("state.json").then(response=>{
            this.setState({
                stateList : response.data
            })
        })
    }


    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>{this.state.cityList.length} - Api Using Axios</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-center">
                    {
                        this.state.cityList.map((cval, index)=>{
                            return <p key={index}> {cval} </p>
                        })
                    }
                </div>
                <div className="col-md-3 text-center">
                    {
                        this.state.stateList.map((xstate, index)=>{
                            return <p key={index}> {xstate} </p>
                        })
                    }
                </div>
            </div>
        </div>
    }

}

export default ApiOne;