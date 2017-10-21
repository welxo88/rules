import React, { Component } from 'react';
import RuleBody from './RuleBody';

class RulesList extends React.Component {
    render() {

        const rules = this.props.rules.map((rule,index) =>
            <RuleBody key={rule.ruleId} data={rule} />
        );
        return (
            <div className="ui styled accordion fluid">{rules}</div>
            );
    }
}	

export default RulesList;