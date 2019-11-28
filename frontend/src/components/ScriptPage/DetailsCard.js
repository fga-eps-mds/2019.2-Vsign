import React from 'react';
import { connect } from 'react-redux';

function DetailsCard({ company, createdAt }) {
    return (
        <div className="card mb-3">
            <div class="card-header">Informações do Contrato</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <b>Título</b>
                        <p>Empréstimo</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <b>Empresa</b>
                        <p>{company}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <b>Data</b>
                        <p>{createdAt}</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <b>Data Limite</b>
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    createdAt: state.contract.createdAt,
    company: state.contract.company.name
});

export default connect(mapStateToProps)(DetailsCard);