import React, { Component } from "react";
import Client from "./Client";

class ListeClients extends Component {
  handleDelete = (id) => {
    const clients = this.props.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id;
    });
    console.log("tata ", clients);
    clients.splice(index, 1);
    this.props.handleSetState(clients);
  };
  handeDelteAll = () => {
    const clients = [];
    this.props.handleSetState(clients);
  };
  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.props.clients.map((client) => (
            <Client
              client={client}
              key={client.id}
              onhandleClientSelectedAdd={() =>
                this.handleClientSelected(client)
              }
              onSup={() => this.handleDelete(client.id)}
            />
          ))}
        </ul>
        <button onClick={this.handeDelteAll}>Effacer la liste</button>
      </div>
    );
  }
}

export default ListeClients;
