import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import RulesRoot from './components/RulesRoot';
//import RulePage from './components/RulePage';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <RulesRoot view='list' />} />
            <Route exact path="/cards" render={() => <RulesRoot view='cards' />} />
            <Route exact path="/rules/:ruleId" render={() => <RulesRoot view='rule' rule />}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

//<Route exact path="/rules/:ruleId" component={RulePage}/>