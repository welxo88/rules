import React from 'react';
import RuleBody from './RuleBody';
import { setAccordionScriptTag } from '../util/helpFunctions.js';

class RulePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.title = "Rules - sääntöjä helpommin";
        setAccordionScriptTag();
    }
    componentDidUpdate() {
        setAccordionScriptTag();
    }
    render() {
        let rule;
        for(let i = 0; i < rulesToShow.length; i++){
            if (rulesToShow[i].ruleId == this.props.match.params.ruleId)
                rule = rulesToShow[i]
        }
        
        return (
            <div>
                <Menu />
                <RuleBody key={rule.ruleId} data={rule} topAccordion={true} />
                <br />
                <RulesCards />
            </div>);
    }
}

export default RulePage;