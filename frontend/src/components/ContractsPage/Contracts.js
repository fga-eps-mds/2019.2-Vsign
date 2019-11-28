import React from 'react';
import { Query } from 'react-apollo';
import Card from './Card';
import { contractsQuery } from '../../graphql/queries';

export default function Contracts() {
	return (
		<div className="py-5 container">
			<Query
				query={contractsQuery()}
				notifyOnNetworkStatusChange>
				{({ loading, error, data, refetch }) => {

					if (loading) {
						return <div>Carregando contratos.</div>
					}

					if (error) {
						return <div className="alert alert-danger">Não foi possível obter os contratos.</div>
					}

					const { contracts } = data || [];

					if (contracts.length === 0) {
						return (
							<div className="alert alert-info">Nenhum contrato encontrado.</div>
						);
					}

					const cards = contracts.map(contract => <Card {...contract} />);
					return <div className="row">{cards}</div>
				}}
			</Query>
		</div>
	);
};
