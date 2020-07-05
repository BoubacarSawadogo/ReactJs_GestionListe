import React, { Component } from "react";
import Client from "./Client";

class ListeClients extends Component {
  state = {
    title: "Liste des clients",
    clients: [
      { id: 1, nom: "Francis Bibeau" },
      { id: 2, nom: "Moctar Tolman" },
      { id: 3, nom: "Karin Benzema" },
    ],
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id;
    });
    console.log(index);
    clients.splice(index, 1);
    this.setState({
      clients: clients,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <ul>
          {this.state.clients.map((client) => (
            <Client
              client={client}
              onhandleClientSelectedAdd={() =>
                this.handleClientSelected(client)
              }
              onSup={() => this.handleDelete(client.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListeClients;
