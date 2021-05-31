import React from "react";
import { HashRouter, Route } from "react-router-dom";
import UserList from "./user";
import ProductList from "./product";
// import BookList from './book';
import Header from "./header";
// import Home from './home';
import CustomerList from "./customer";
import MyState1 from "./state1";
import MyState2 from "./state2";
import MyState3 from "./state3";
import State4 from "./state4";
import State5 from "./st-5";
import Hello from "./books";
import ApiOne from "./api1";
import ApiTwo from "./api2";
import State11 from "./state11";
import State12 from "./state12";
import State13 from "./state13";
import MyApi1 from "./myapi1";
import MyApi2 from "./myapi2";
import MyApi3 from "./myapi3";
//import API from './dash';
//import UserLogin from './login';

function MyApp() {
  return (
    <HashRouter>
      <Header />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/user" component={UserList} />
      <Route exact path="/product" component={ProductList} />
      <Route exact path="/customer" component={CustomerList} />
      <Route exact path="/state1" component={MyState1} />
      <Route exact path="/state2" component={MyState2} />
      <Route exact path="/state3" component={MyState3} />
      <Route exact path="/state4" component={State4} />
      <Route exact path="/state5" component={State5} />
      <Route exact path="/books" component={Hello} />
      <Route exact path="/apione" component={ApiOne} />
      <Route exact path="/apitwo" component={ApiTwo} />
      <Route exact path="/state11" component={State11} />
      <Route exact path="/state12" component={State12} />
      <Route exact path="/state13" component={State13} />
      <Route exact path="/myapi1" component={MyApi1} />
      <Route exact path="/myapi2" component={MyApi2} />
      <Route exact path="/myapi3" component={MyApi3} />
    </HashRouter>
  );
}

export default MyApp;
