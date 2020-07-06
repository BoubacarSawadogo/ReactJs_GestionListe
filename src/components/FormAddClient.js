import React, { Component } from "react";

export default class FormAddClient extends Component {
  state = {
    nouveauClient: "",
    //   clientsS: this.props.clients,
  };

  handleChange = (event) => {
    console.log("value : ", event.target.value);

    this.setState({
      nouveauClient: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.nouveauClient !== "") {
      this.props.onAddClient({
        id: new Date().getSeconds(),
        nom: this.state.nouveauClient,
      });
      this.setState({
        nouveauClient: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <input
            type="text"
            className="col-sm-10"
            placeholder="Ajouter un client"
            value={this.state.nouveauClient}
            onChange={this.handleChange}
          />
          <button className="col-sm-2">Confirmer</button>
        </div>
      </form>
    );
  }
}
