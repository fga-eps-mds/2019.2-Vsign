import React, { Component } from 'react';
import "./ContractsPage.css";
import Contract from './Contract';

const contracts = [
  {
    uuid: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 1000000),
    status: "Completo"
  },
  {
    uuid: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 1000000),
    status: "Completo"
  },
  {
    uuid: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 1000000),
    status: "Análise"
  },
  {
    uuid: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 1000000),
    status: "Pendente"
  },
  {
    uuid: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 1000000),
    status: "Pendente"
  }
]

export default class UserContracts extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <p><strong>VSign</strong></p>
        </div>

        <div className="contracts-container">

          <div className="contracts-title-container">
            <h3>Meus contratos</h3>
          </div>

          {contracts.map(c => (
            <Contract contract={c} />
          ))} {/* Contracts Map */}

        </div>
      </div>
    )
  }
}
