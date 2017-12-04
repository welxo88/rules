import React from 'react';
import SectionBody from './SectionBody';

class RuleBody extends React.Component {
    constructor(props) {
        super(props);
    }
    createSections(sections){
        return sections.map((section,index) =>{
            let subsections;
            if(section.subSections!=undefined){
                subsections = this.createSections(section.subSections);
            }
            return <SectionBody key={section.sectionId} data={section}>{subsections}</SectionBody>;
        })
    }
    render() {
        
        const sections = this.createSections(this.props.data.sections);

        let forReturn = (<div>
                <div className="title">
                    <i className="dropdown icon"></i>
                    {this.props.data.ruleName!=undefined && this.props.data.ruleName + ", "}
                    {this.props.data.validStart!=undefined && this.props.data.validStart}
                </div>
                <div className="content">
                    {this.props.data.approvedDate!=undefined && 'Hyväksytty: '+this.props.data.approvedDate}
                    <br />
                    {this.props.data.validStart!=undefined && ' Voimassaolo: '+this.props.data.validStart+' - '}
                    {this.props.data.validEnd!=undefined && this.props.data.validEnd}
                    <br />
                    {this.props.data.linkToOriginal!=undefined && <a href={this.props.data.linkToOriginal} target='_blank'>Alkuperäinen teksti (pdf)</a>}
                    <div className="accordion">
                        {sections}
                    </div>
                </div></div>);
                
        return (forReturn);
    }
}

export default RuleBody;