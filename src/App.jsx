import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Forms from "./Forms";
import ProductCommentForm from "./ProductCommentForm";
import Hooks from "./Hooks";
import FormsWithHooks from "./FormsWithHooks";
import ListHooks from "./ListHooks";
import FetchDataByHooks from "./FetchDataByHooks";

import HooksDemo from "./HooksDemo";
import Customer from "./Custumer";

export default class App extends Component {
  greetMe(){
    alert("hello")
  }
  render() {
  
    return (
      // <React.Fragment>
      //   <NavBar />
      //   <MainContent />
      // </React.Fragment>
      <div>
        {/* <FormsWithHooks></FormsWithHooks> */}
        {/* <ProductCommentForm></ProductCommentForm> */}
        {/* <FormsWithHooks></FormsWithHooks> */}
  
        {/* <FetchDataByHooks></FetchDataByHooks> */}
        {/* <HooksDemo></HooksDemo> */}
              {/* <FetchDataByHooks></FetchDataByHooks> */}
              <Customer></Customer>
              
      </div>
    );
  }
}
