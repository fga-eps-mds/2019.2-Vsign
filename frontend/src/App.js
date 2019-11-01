import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles';

const App = () => {
    const name = localStorage.getItem("name");
    name ? console.log("Nome: ", name) : localStorage.setItem("name", "marcos");

    return <React.Fragment>
        <GlobalStyle />
        <Routes />
    </React.Fragment>
};

export default App;
