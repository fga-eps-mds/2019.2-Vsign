import React, { Fragment } from 'react';
import Routes from './components/Routes';
import GlobalStyle from './styles';

export default function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Routes />
        </Fragment>
    );
}
