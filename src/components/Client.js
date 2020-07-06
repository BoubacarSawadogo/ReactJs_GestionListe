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
        <li key={this.props.client.id} className="list-group-item hoverr">
          <h3 className="row">
            <span className="col">{"   " + this.props.client.nom + "   "}</span>
            <button
              onClick={this.props.onSup}
              className="btn btn-danger rounded-circle"
            >
              X
            </button>
          </h3>{" "}
        </li>
      </React.Fragment>
    );
  }
  0;
}

export default Client;
