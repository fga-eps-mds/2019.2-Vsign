import React from 'react';
import SignButton from './SignButton';


const StatusBadge = ({ status }) => {
	const statuses = {
		'approved': {
			'class': 'badge-success',
			'text': 'Aprovado'
		},
		'rejected': {
			'class': '#C30',
			'text': 'Reprovado'
		},
		'pending': {
			'class': '#C30',
			'text': 'Pendente'
		},
		'unavailable': {
			'class': '#333',
			'text': 'Indisponível'
		}
	};
	const statusProp = statuses[status];
    return (
        <span class={`badge ${statusProp.class}`}>{statusProp.text}</span>
    );
};

const LIST_CLASSNAME = 'list-group-item d-flex justify-content-between align-items-center px-0 border-0';

export default function Card({ id, company, createdAt }) {
	return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 class="card-title">Empréstimo</h5>
                    <ul className="list-group list-group-flush my-2">
                        <li className={LIST_CLASSNAME}>
                            <span>Empresa</span>
                            <span>{company.name}</span>
                        </li>
                        <li className={LIST_CLASSNAME}>
                            <span>Data</span>
                            <span>{createdAt}</span>
                        </li>
                        <li className={LIST_CLASSNAME}>
                            <span>Status</span>
                            <StatusBadge status="approved" />
                        </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                        <SignButton contractId={id} companyApiKey={company.api_key} />
                        <small className="text-muted">expira em 24h</small>
                    </div>
                </div>
            </div>
        </div>
	);
};
