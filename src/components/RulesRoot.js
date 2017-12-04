import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { setAccordionScriptTag, getData } from '../util/helpFunctions.js';

import Menu from './Menu';
import RuleBody from './RuleBody';

class RulesRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: [
                {ruleTextId:'loading',ruleName:'loading...',sections:[
                    {sectionHeader: 'loading...',sectionId: 1,paragraphs: [
                      {paragraphId : 1,paragraphText:'loading'}
                    ]}
                ]}
            ]
        };
    }
    componentWillMount(){
        
        getData().then((response) => {
            this.setState({rules: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }
    componentDidMount() {
        document.title = "Rule§ - Näyttelysäännöstö";
        setAccordionScriptTag();
    }
    
    render() {
        
        const rules = this.state.rules.map((rule,index) =>
            <RuleBody key={rule.ruleTextId} data={rule} />
        );
        
        return (
            <div>
                <Menu />
                <br />
                <div className="ui styled accordion fluid">{rules}</div>
            </div>
        );
    }
}

export default RulesRoot;