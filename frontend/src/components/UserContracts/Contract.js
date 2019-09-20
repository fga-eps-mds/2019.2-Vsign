/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import "./ContractsPage.css";

const contract = props => (
  <div className="contract">
    <div className="contract-info">
      <div className="contract-info-left-div">
        <p><strong>Número</strong>: {props.contract.uuid}</p>
        <p><strong>Valor</strong>: R${props.contract.amount}</p>
      </div>

      <div className="contract-info-right-div">
        <p>
          <strong>Status</strong>: {props.contract.status}
        </p>
      </div>

      <button>
        <p>Ver Mais</p>
      </button>
    </div>
  </div>
);

export default contract;