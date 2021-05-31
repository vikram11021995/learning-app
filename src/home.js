import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import BookList from "./book";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      itemlist: [{ name: "Laptop", price: 2900, photo: "6.jpg" }],
    };
  }

  getItem = () => {
    axios.get("item.json").then((response) => {
      this.setState({
        itemlist: response.data,
      });
    });
  };

  // componentDidMount(){
  //     this.getItem();
  // }

  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
            <h2>Welcome Home</h2>
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("/book")}
            >
              Show Product
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.itemlist.map((xitem, index) => {
            return (
              <div className="col-md-4 form-group">
                <div className="border p-3">
                  <h5>{xitem.name}</h5>
                  <p>Rs {xitem.price}</p>
                  <img
                    alt={xitem.name}
                    className="img-fluid"
                    src={xitem.photo}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <BookList item={this.state.itemList} />
      </div>
    );
  }
}

export default withRouter(Home);
