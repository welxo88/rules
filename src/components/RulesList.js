import React, { Component } from 'react';
import { getData } from '../util/helpFunctions.js';

class RulesList extends React.Component {
    render() {
        const rulesToShow = getData();
        const rules = rulesToShow.map((rule,index) =>
            <RuleBody key={rule.ruleId} data={rule} />
        );
        return (
            <div className="ui styled accordion fluid">{rules}</div>
            );
    }
}	

export default RulesList;