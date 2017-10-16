import React from 'react';
import { Link } from 'react-router-dom';

class RulesCards extends React.Component {
    render() {
        const rules = rulesToShow.map((rule,index) => {
            return(
                <div className="card" key={rule.ruleId}>
                    <div className="content">
                        <div className="header">
                            <Link to={"/rules/"+rule.ruleId}>{rule.ruleName}</Link>
                        </div>
                        <div className="meta">
                            <Link to={"/rules/"+rule.ruleId}>{rule.approvedDate}</Link>
                        </div>
                    </div>
                </div>);

        });
        return (<div className="ui two cards">{rules}</div>);
    }
}	

export default RulesCards;