import React, { Component } from "react";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedClient: "",
    };
  }

  render() {
    const { client, onSup } = this.props;
    return (
      <React.Fragment>
        <li key={client.id} className="list-group-item hoverr">
          <h3 className="row">
            <span className="col">{"   " + client.nom + "   "}</span>
            <button onClick={onSup} className="btn btn-danger rounded-circle">
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
