import React , {Component} from 'react';

class State5 extends Component{

    constructor(){
        super();

        this.state={
            city:[],
            state:[],
            newcity:'',
            newstate:''
        }
    }

    processCity=(obj)=>{
        this.setState({
            newcity:obj.target.value
        })
    }
    processState=(obj)=>{
        this.setState({
            newstate:obj.target.value
        })
    }

    save1=()=>{
            this.setState({
             city: this.state.city.concat(this.state.newcity),
            })        
    }
    save2=()=>{
        this.setState({
            state: this.state.state.concat(this.state.newstate),
        })        
}

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-info text-center">
                            <h2>Printing the data in table on other side</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <h3 className="text-success text-center">Enter Details</h3>
                            <div className="form-group">
                                <label>City Name</label>
                                <input onChange={this.processCity} type="text" className="form-control"/>
                            </div>
                            <button className="btn btn-danger m-2" onClick={this.save1}>Save</button>
                            <div className="form-group">
                                <label>State Name</label>
                                <input onChange={this.processState} type="text" className="form-control"/>
                            </div>
                            <button className="btn btn-danger m-2" onClick={this.save2}>Save</button>
                        </div>
                        <div className="col-md-9 text-center">
                        <h3 className="text-success text-center">Output</h3> 
                        <h1> City List </h1>
                            {
                                this.state.city.map((city,index)=>{
                                return<label className="border p-2" key={index}>{city}</label>
                                })
                            }    
                           <hr/>
                           <h1> State List</h1>
                            {
                                this.state.state.map((state,index)=>{
                                return<p className="border p-2" key={index}>{state}</p>
                                })
                            }   
                        </div>
                    </div>
               </div>
    }
}

    export default State5;