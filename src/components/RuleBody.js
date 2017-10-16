import React from 'react';
import SectionBody from './SectionBody';

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

export default RuleBody;