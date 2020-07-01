import React, { Component } from "react";

class ListeClients extends Component {
  state = {
    title: "Liste des clients",
    clients: [
      { id: 1, nom: "Francis Bibeau" },
      { id: 2, nom: "Moctar Tolman" },
      { id: 3, nom: "Karin Benzema" },
    ],
  };
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="subibmit" placeholder="Ajouter un client " />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

export default ListeClients;
