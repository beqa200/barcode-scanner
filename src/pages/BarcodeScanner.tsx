import React, { Component } from "react";

import { Link } from "react-router-dom";
import Scanner from "./Scanner";

class BarcodeScanner extends Component {
  state = {
    results: [],
  };

  _scan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  _onDetected = (result) => {
    this.setState({ results: [] });
    this.setState({ results: this.state.results.concat([result]) });
  };

  render() {
    return (
      <div>
        <Link to="/">back</Link>
        <span>Barcode Scanner</span>

        <Scanner onDetected={this._onDetected} />

        <p>
          {this.state.results[0]
            ? this.state.results[0].codeResult.code
            : "No data scanned"}
        </p>
      </div>
    );
  }
}

export default BarcodeScanner;
