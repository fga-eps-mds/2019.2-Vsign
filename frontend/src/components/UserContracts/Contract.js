/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import "./ContractsPage.css";

const checkScreenWidth = () => {
    const width = window.screen.width;
    
    console.log("Width", width);
    return width;
}

const goToDetailsScreen = () => {
    alert("Go to contract details screen");
}

const contract = props => (
    <div className="contract">
        <div className="contract-info" onClick={() => checkScreenWidth() < 600 ? goToDetailsScreen() : null}>
            <div className="contract-info-left-div">
                <p><strong>Número</strong>: {props.contract.uuid}</p>

                <p><strong>Valor</strong>: R${props.contract.amount}</p>
            </div>

            <div className="contract-info-right-div">
                <p>
                    <strong>Status</strong>: {props.contract.status}
                </p>
            </div>

            {checkScreenWidth() > 600 ? (
                <button onClick={() => goToDetailsScreen()}>
                    <p>Ver Mais</p>
                </button>
            ) : null}
        </div>
    </div>
);

export default contract;