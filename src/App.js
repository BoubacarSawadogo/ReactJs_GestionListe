import React, { Component } from "react";
import ListeClients from "./components/ListeClients";
import FormAddClient from "./components/FormAddClient";

class App extends Component {
  state = {
    nouveauClient: "",
    title: "Liste des clients",
    clients: [
      { id: 1, nom: "Francis Bibeau" },
      { id: 2, nom: "Moctar Tolman" },
      { id: 3, nom: "Karin Benzema" },
    ],
  };

  handleAdd = (client) => {
    const clients = this.state.clients.slice();
    clients.push(client);
    this.setState({
      clients: clients,
    });
  };

  handleSetState = (clients) => {
    this.setState({
      clients: clients,
    });
  };

  render() {
    if (this.state.clients.length !== 0) {
      return (
        <div className="container">
          <div>
            <h3 className="card-body p-3 mb-2 bg-dark text-white">
              {this.state.title}
            </h3>
            <FormAddClient
              clients={this.state.clients}
              onAddClient={this.handleAdd}
            />
          </div>

          <ListeClients
            clients={this.state.clients}
            handleSetState={this.handleSetState}
          />
        </div>
      );
    } else {
      return (
        <h1 className="container p-3 mb-2 bg-dark text-white">
          Pas de clients
        </h1>
      );
    }
  }
}

export default App;
