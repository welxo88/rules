import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import RulesRoot from './components/RulesRoot';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <RulesRoot />} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);