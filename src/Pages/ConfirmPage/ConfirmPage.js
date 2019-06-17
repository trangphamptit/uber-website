import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
// import ToAddressPage from "../ToAddressPage/ToAddressPage";
import FormConfirm from "./FormConfirm";
import "./ConFirmPage.scss";
const mapStyles = {
  top: "60px",
  left: "0px",
  position: "absolute"
};

class ConFirmPage extends Component {
  state = {
    lat: 47.444,
    lng: -122.176
  };

  changeLocation = ({ lat, lng }) => {
    this.setState({
      lat,
      lng
    });
  };
  render() {
    return (
      <div className="searchmap">
        <FormConfirm />
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          center={{ lat: this.state.lat, lng: this.state.lng }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s"
})(ConFirmPage);
