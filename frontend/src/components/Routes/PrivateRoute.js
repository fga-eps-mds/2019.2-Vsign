import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        console.log(this.props);
        const { component: Component, authenticated, ...rest } = this.props;
        
        return (
            <Route
                {...rest}
                render={props => authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        from={this.props.path}
                        to="/login"
                    />
                )}
            />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
    authenticated: state.session.authenticated
}};

export default connect(mapStateToProps)(PrivateRoute);