import React, { Component } from "react";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedClient: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        <li key={this.props.client.id}>
          <h3>
            <span>{this.props.client.nom + "   "}</span>
            <button onClick={this.props.onSup}>X</button>
          </h3>{" "}
        </li>
      </React.Fragment>
    );
  }
  0;
}

export default Client;
