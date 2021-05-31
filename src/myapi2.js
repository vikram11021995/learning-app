import React , {Component} from 'react';
import axios from 'axios';

class MyApi2 extends Component{

    constructor() {
        super();
        this.state={
            item:[],
            itemlist:[]
        }
    }

    getData=()=>{
        axios.get("myarray.json").then(response=>{
            this.setState({
                item:response.data
            })
        })
    }

    

    
    componentDidMount(){
        this.getData();
    }

    getItemlist=(index)=>{
            this.setState({
                itemlist:this.state.item[index].product
        })
    }

    render(){
        return  <div className="container">
                   <div className="row">
                       <div className="col-md-12 text-center">
                           <div className="bg-info rounded  p-3 text-white">
                                <h3>Available Data :- {this.state.item.length}</h3>
                                {
                                this.state.item.map((xitem , index)=>{
                                return<button className="btn btn-danger text-white m-3" key={index} onClick={this.getItemlist.bind(this,index)}>
                                    {xitem.category} has {xitem.product.length} items</button>
                                })
                                }
                                
                           </div>
                       </div>
                    </div>   
                       <div className="row">
                           <div className="col-md-12  text-center rounded">
                               <div className="jumbotron  p-3">
                                <h4>Available items</h4>
                               {
                                this.state.itemlist.map((xitem , index)=>{
                                return<p className="text-danger" key="index">{xitem}</p>
                                })
                            }
                                </div>
                           </div>
                       </div>
                   
                </div>
    }

}

export default MyApi2;