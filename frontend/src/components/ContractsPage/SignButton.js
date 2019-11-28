import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContractQuery } from '../../graphql/queries';
import { setContractAction } from '../../actions/contract';

class SignButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            fetching: false
        };
    }

    async handleClick(event) {
        event.preventDefault();
        this.toggleFetching();

        try {
            const { contractId } = this.props;
            const variables = { id: contractId };
            const { data } = await getContractQuery(variables);
            const { getContract } = data || {};
            this.props.setContractAction(getContract);
        } catch {
            alert('Não foi possível pegar informações do contrato');
        } finally {
            this.toggleFetching();
        }
        
    }
    

    toggleFetching() {
        this.setState({
            fetching: !this.state.fetching
        });
    }
    
    
    render() {
        const { fetching } = this.state;
        const text = (!fetching) ? 'Assinar' : 'Aguarde...';
        const disable = (fetching) ? 'disabled' : ''
        return (
            <button onClick={this.handleClick} className={`btn btn-primary ${disable}`}>{text}</button>
        );
    }
}

const mapDispatchToProps = {
    setContractAction
};

export default connect(null, mapDispatchToProps)(SignButton);