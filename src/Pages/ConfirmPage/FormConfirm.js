import React, { Component } from "react";
const values = localStorage.getItem(fromAddess, toAddress);
console.log(values.fromAddess, values.toAddress);
class FormConfirm extends Component {
  render() {
    return (
      <div className="fromConfirm">
        <div className="fromField">
          <i class="fas fa-map-marker-alt" />
          <div className="content">
            <h5>From</h5>
            <label>{values.fromAddess}</label>
          </div>
        </div>
        <div className="toField">
          <i class="fas fa-map-marker-alt" />
          <div className="content">
            <h5>To</h5>
            <label>{values.toAddress}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormConfirm;
