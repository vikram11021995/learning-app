import React from "react";
const Book = ["java", "python", "c++", "javascript", "c"];
const BookList = [
  { name: "JavaScript", price: 200, qty: 15, author: "vikram" },
  { name: "React", price: 200, qty: 51, author: "abc" },
  { name: "Angular", price: 200, qty: 53, author: "def" },
  { name: "programming", price: 200, qty: 55, author: "ghi" },
  { name: "kotlin", price: 200, qty: 25, author: "xyz" },
];
const Hello = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Welcome, Home</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h2>{Book.length} -: Book List</h2>

          <p>{Book.length}</p>
          <p>{Book[0]}</p>
          <p>{Book[1]}</p>
          <p>{Book[2]}</p>
          <p>{Book[3]}</p>
        </div>
        <div className="col-md-9">
          <h2>{BookList.length} -: Book List</h2>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {BookList.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>{row.qty}</td>
                    <td>{row.author}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hello;
