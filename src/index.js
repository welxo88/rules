import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import RulesRoot from './components/RulesRoot';
import RulePage from './components/RulePage';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={RulesRoot}/>
            <Route exact path="/rules/:ruleId" component={RulePage}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);