import React from 'react';
import SectionBody from './SectionBody';

class RuleBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        const sections = this.props.data.sections.map((section,index) =>
            <SectionBody key={section.sectionId} data={section} />
        );

        let forReturn = (<div>
                <div className="title">
                    <i className="dropdown icon"></i>
                    {this.props.data.ruleName!=undefined && this.props.data.ruleName + ", "}
                    {this.props.data.validStart!=undefined && this.props.data.validStart}
                </div>
                <div className="content">
                    {this.props.data.approvedDate!=undefined && 'Hyväksytty: '+this.props.data.approvedDate}
                    {this.props.data.validStart!=undefined && ' Voimassaolo: '+this.props.data.validStart+' - '}
                    {this.props.data.validEnd!=undefined && this.props.data.validEnd}
                    <div className="accordion">
                        {sections}
                    </div>
                </div></div>);
                
        return (forReturn);
    }
}

export default RuleBody;