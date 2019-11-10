import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContractQuery } from '../../graphql/queries';

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
            const { contractId: id } = this.props;
            const data = await getContractQuery({ id });
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
    // getContractAction
};

export default connect(null, mapDispatchToProps)(SignButton);