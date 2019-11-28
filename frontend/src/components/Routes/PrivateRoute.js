import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_URL } from '../../constants/routes';

class PrivateRoute extends Component {
    render() {
        const { component: Component, authenticated, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        from={this.props.path}
                        to={LOGIN_URL}
                    />
                )}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);