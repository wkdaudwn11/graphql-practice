import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from "react-router-dom";
import client from './apolloClient';

import Home from './Home';
import Detail from './Detail';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App" />
                <Router>
                    <>
                        <Route exact={true} path={"/"} componen={Home} />
                        <Route path={"/details/:movieId"} componen={Detail} />
                    </>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;