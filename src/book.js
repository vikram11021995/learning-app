import React from "react";
import { withRouter } from "react-router-dom";

const allBook = [
  "Java",
  "Python",
  "Nodejs",
  "PHP",
  "HTML",
  "CSS",
  "Angular",
  "ReactJs",
];

const city = ["Pune", "Delhi", "Patna", "Chennai", "Kolkata", "Mumbai"];

class BookList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span>
              {this.props.item.map((cvals, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{cvals.name}</td>
                    <td>{cvals.name}</td>
                    <td>{cvals.photo}</td>
                  </tr>
                );
              })}
            </span>
            // <h2 className="text-center">{allBook.length}- Book List</h2>
          </div>
        </div>
        <div className="row">
          {allBook.map((cval, index) => {
            return (
              <div className="col-md-3" key={index}>
                <p className="p-2 border">
                  {index} - {cval}
                </p>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="container-md-3">
            <ul className="list-group">
              <li className="list-group-item active">Available City</li>
              {city.map((cval, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {cval}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-3">
            <h4>Dynamic Text Box</h4>
            {city.map((cval, index) => {
              return (
                <p key={index}>
                  <input type="text" className="form-control" value={cval} />
                </p>
              );
            })}
          </div>

          <div className="col-md-3">
            <h4>Dropdown</h4>
            <select className="form-control">
              <option>Choose City</option>
              {city.map((cval, index) => {
                return <option key={index}> {cval} </option>;
              })}
            </select>
          </div>

          <div className="col-md-3">
            <h4>Checkbox</h4>
            {city.map((cval, index) => {
              return (
                <p key={index}>
                  <input type="checkbox" /> {cval}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookList);
