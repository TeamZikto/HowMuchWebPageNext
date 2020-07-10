import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Home from '../pages/index';

const Routes = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    </Router>
)

export default Routes