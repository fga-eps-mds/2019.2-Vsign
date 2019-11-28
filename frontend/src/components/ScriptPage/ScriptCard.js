import React from 'react';
import { connect } from 'react-redux';

function ScriptCard({ script }) {
    const blocks = script.map(block => <p>{block}</p>);
    return (
        <div className="card mb-3">
            <div class="card-header">Roteiro do Contrato</div>
            <div className="card-body">{blocks}</div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    script: JSON.parse(state.contract.script)
});

export default connect(mapStateToProps)(ScriptCard);