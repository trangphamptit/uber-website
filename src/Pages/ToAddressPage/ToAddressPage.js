import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./ToAddressPage.scss";
import FormDefaultAddress from "./FormDefaultAddress";
import { withRouter } from "react-router-dom";
class ToAddresspage extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.changeLocation(latLng);
      })
      .catch(error => console.error("Error", error));
  };
  handleSubmit = (history, event) => {
    console.log(this.state.address);
    localStorage.setItem("toAddress", this.state.address);
    history.push("./showlocal");
    event.preventDefault();
  };

  render() {
    const { history } = this.props;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onSubmit={this.handleSubmit}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="modal-search-location">
            <div className="inputForm">
              <label>
                <i class="fas fa-square-full" />
              </label>
              <input
                {...getInputProps({
                  placeholder: "Where would you like to go?",
                  className: "location-search-input"
                })}
              />
              <button
                className="search-button"
                type="submit"
                onClick={event => this.handleSubmit(history, event)}
              >
                <i class="fas fa-search" />
              </button>
            </div>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              <FormDefaultAddress />
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const SearchDestinationWithRouter = withRouter(ToAddresspage);
export default SearchDestinationWithRouter;
