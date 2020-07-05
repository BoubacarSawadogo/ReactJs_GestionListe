import React, { Component } from "react";
import ListeClients from "./components/ListeClients";
import FormAddClient from "./components/FormAddClient";

class App extends Component {
  state = {
    nouveauClient: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const clients = this.state.clients.slice();

    if (this.state.nouveauClient !== "") {
      clients.push({
        id: new Date().getSeconds(),
        nom: this.state.nouveauClient,
      });
    }
    this.setState({
      clients: clients,
      nouveauClient: "",
    });
  };

  render() {
    return (
      <div className="App">
        <ListeClients />
        <FormAddClient handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
