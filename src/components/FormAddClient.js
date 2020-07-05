import React, { Component } from "react";

export default class FormAddClient extends Component {
  state = {
    nouveauClient: "",
  };

  handleChange = (event) => {
    console.log("value : ", event.target.value);

    this.setState({
      nouveauClient: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un client"
          value={this.state.nouveauClient}
          onChange={this.handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }
}
