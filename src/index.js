import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
/*
function setAccordionScriptTag() {
    let sOld = document.getElementById("accordeonJqueryScript");
    sOld.parentNode.removeChild(sOld);

    const s = document.createElement('script');
    s.id = 'accordeonJqueryScript';
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "$(function () {$('.accordion').first().accordion({ exclusive: false });});";
    document.body.appendChild(s);
}

class Menu extends React.Component {
    render() {
        return (<div className="ui borderless main menu placeholder inverted">
                    <div className="ui text container">
                        <div href="#" className="header item">
                            <Link to="/">Rules - sääntöjä helpommin</Link>
                        </div>
                        <a href="#" className="item">Etsi</a>
                    </div>
                </div>);
    }
}

class SectionBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data};
    }
    render() {
        const paragraphs = this.state.data.paragraphs.map((paragraph,index) =>
            <p key={paragraph.paragraphId}>{paragraph.paragraphText}</p>
        );
        return (<div>
            <div className="title">
                <i className="dropdown icon"></i>
                {this.state.data.sectionHeader}
            </div>
            <div className="content">
                
                    {paragraphs}
                
            </div></div>);
    }
}

class RuleBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data, topAccordion:props.topAccordion};
    }
    render() {
        const sections = this.state.data.sections.map((section,index) =>
            <SectionBody key={section.sectionId} data={section} />
        );
        let forReturn = (<div>
                <div className="title">
                    <i className="dropdown icon"></i>
                    {this.state.data.ruleName + ", " + this.state.data.validStart}
                </div>
                <div className="content">
                    Hyväksytty: {this.state.data.approvedDate} Voimassaolo: {this.state.data.validStart} - {this.state.data.validEnd} 
                    <div className="accordion">
                        {sections}
                    </div>
                </div></div>);
                
                
        if(this.state.topAccordion === true){
            console.log(forReturn.props.children);
            return(<div className="ui styled accordion fluid">{forReturn.props.children}</div>);
        } else {
            return(forReturn);
        }
    }
}

class RulesList extends React.Component {
    render() {
        const rules = rulesToShow.map((rule,index) =>
            <RuleBody key={rule.ruleId} data={rule} />
        );
        return (
            <div className="ui styled accordion fluid">{rules}</div>
            );
    }
}	

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
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={RulesRoot}/>
            <Route exact path="/rules/:ruleId" component={RulePage}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);*/

import RulesRoot from './components/RulesRoot';

ReactDOM.render(
    <RulesRoot />,
    document.getElementById('root')
);