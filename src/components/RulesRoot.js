import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { setAccordionScriptTag, getData } from '../util/helpFunctions.js';

import Menu from './Menu';
import RulesList from './RulesList';
import RulesCards from './RulesCards';

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
    constructor(props) {
        super(props);
        this.state = {
            rules: []
        };
    }
    componentWillMount(){
        console.log('retrieving data from server')
        getData().then((response) => {
            this.setState({rules: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }
    componentDidMount() {
        document.title = "Näyttelysäännöstö";
        setAccordionScriptTag();
    }
    render() {
        return (
            <div>
                <Menu view={this.props.view} />
                <br />
                {this.props.view=='list' && <RulesList rules={this.state.rules} />}
                {this.props.view=='cards' && <RulesCards rules={this.state.rules} />}
            </div>
        );
    }
}

export default RulesRoot;