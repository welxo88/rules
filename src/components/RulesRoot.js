import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { setAccordionScriptTag, getData, preg_quote } from '../util/helpFunctions.js';

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
            ],
            searching: ''
        };
        this.search = this.search.bind(this);
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
    search(e){
        this.setState({searching:preg_quote(e.target.value.toLowerCase())});
    }
    render() {
        
        const rules = this.state.rules.map((rule,index) =>
            <RuleBody 
                key={rule.ruleTextId} 
                data={rule} 
                toSearch={this.state.searching.length > 2 && this.state.searching} />
        );
        
        return (
            <div>
                <Menu searchFunc={this.search} />
                <br />
                <div className="ui styled accordion fluid">{rules}</div>
            </div>
        );
    }
}

export default RulesRoot;