import React from 'react';
import { FlexboxGrid, Table, Panel, Icon, IconButton, Badge } from 'rsuite';
import { Section } from './styles';
import data from './contracts.json';

const { Column, HeaderCell, Cell } = Table;

const ActionCell = ({ rowData, dataKey, ...props }) => {
	return (
		<Cell {...props} className="link-group">
			<IconButton
				appearance="subtle"
				href={`/introduction/1`}
				icon={<Icon icon="edit2" />}
			/>
		</Cell>
	);
};

const StatusCell = ({ rowData, dataKey, ...props }) => {
	const results = {
		'approved': {
			'color': '#4CAF50',
			'text': 'Assinado'
		},
		'rejected': {
			'color': '#C30',
			'text': 'Expirado'
		},
		'processing': {
			'color': '#C30',
			'text': 'Processando'
		},
		'pending': {
			'color': '#C30',
			'text': 'Pendente'
		}
	};
	const result = results[rowData[dataKey]];
	return (
		<Cell {...props}>
			<Badge style={{ 'background': result.background }} content={result.text} />
		</Cell>
	);
};

const ResultCell = ({ rowData, dataKey, ...props }) => {
	const results = {
		'approved': {
			'color': '#4CAF50',
			'text': 'Aprovado'
		},
		'rejected': {
			'color': '#C30',
			'text': 'Reprovado'
		},
		'pending': {
			'color': '#C30',
			'text': 'Pendente'
		},
		'unavailable': {
			'color': '#333',
			'text': 'Indisponível'
		}
	};
	const result = results[rowData[dataKey]];
	return (
		<Cell {...props}>
			<Badge style={{ 'background': result.background }} content={result.text} />
		</Cell>
	);
};

export default function Contracts() {
	return (
		<Section>
			<FlexboxGrid justify="center">
				<FlexboxGrid.Item colspan={15}>
					<Panel bodyFill>
						<Table height={400} data={data}>
							<Column flexGrow={1} align="center" fixed>
								<HeaderCell>Id</HeaderCell>
								<Cell dataKey="id" />
							</Column>

							<Column flexGrow={2}>
								<HeaderCell>Empresa</HeaderCell>
								<Cell dataKey="company" />
							</Column>

							<Column flexGrow={2}>
								<HeaderCell>Data de Abertura</HeaderCell>
								<Cell dataKey="createdAt" />
							</Column>
							<Column flexGrow={2}>
								<HeaderCell>Data de Vencimento</HeaderCell>
								<Cell dataKey="expiresAt" />
							</Column>

							<Column flexGrow={1}>
								<HeaderCell>Tipo</HeaderCell>
								<Cell dataKey="kind" />
							</Column>

							<Column flexGrow={1}>
								<HeaderCell>Status</HeaderCell>
								<StatusCell dataKey="status" />
							</Column>

							<Column flexGrow={1}>
								<HeaderCell>Resultado</HeaderCell>
								<ResultCell dataKey="result" />
							</Column>

							<Column>
								<HeaderCell>Assinatura</HeaderCell>
								<ActionCell dataKey="id" />
							</Column>
						</Table>
					</Panel>
				</FlexboxGrid.Item>
			</FlexboxGrid>
		</Section>
	);
};
