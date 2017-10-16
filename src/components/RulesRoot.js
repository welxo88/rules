import React, { Component } from 'react';
import { setAccordionScriptTag } from '../util/helpFunctions.js';

import Menu from './Menu';
import RulesList from './RulesList';

/*
class RulesRoot extends React.Component {
    componentDidMount() {
        document.title = "Rules - sääntöjä helpommin";
        setAccordionScriptTag();
    }
    render() {
        return (
            <div>
                <Menu />
                <RulesList />
                <br />
                <RulesCards />
            </div>
        );
    }
}
*/


class RulesRoot extends React.Component {
    componentDidMount() {
        document.title = "Rules - sääntöjä helpommin";
        setAccordionScriptTag();
    }
    render() {
        return (
            <div>
                <Menu />
                <RulesList />
                <br />
                
            </div>
        );
    }
}

export default RulesRoot;