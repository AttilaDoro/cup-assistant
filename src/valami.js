import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
  render() {
    return (
      <div>majom</div>
    );
  }
};

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
if (wrapper) ReactDOM.render(<FormContainer />, wrapper)