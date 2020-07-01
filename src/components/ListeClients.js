import React, { Component } from "react";

class ListeClients extends Component {
  state = {
    title: "Liste des clients",
    nouveauClient: "",
    clients: [
      { id: 1, nom: "Francis Bibeau" },
      { id: 2, nom: "Moctar Tolman" },
      { id: 3, nom: "Karin Benzema" },
    ],
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      nouveauClient: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const clients = this.state.clients.slice();
    console.log(clients);

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

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id;
    });
    console.log(index);
  };

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.nom}{" "}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Ajouter un client"
            value={this.state.nouveauClient}
            onChange={this.handleChange}
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

export default ListeClients;
