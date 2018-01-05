import React from 'react';
import SectionBody from './SectionBody';

class RuleBody extends React.Component {
    constructor(props) {
        super(props);
        this.trueArrayChecker = this.trueArrayChecker.bind(this);
        this.dbDateToHumanRead = this.dbDateToHumanRead.bind(this);
    }

    trueArrayChecker(el,index,array){return el==true;}

    dbDateToHumanRead(date){
        let stamp = new Date(Date.parse(date));
        return stamp.getDate()+'.'+(stamp.getMonth()+1)+'.'+stamp.getFullYear();
    }

    createSections(sections){
        return sections.map((section,index) =>{
            let subsections;
            let isFound = -1;

            if(section.subSections!=undefined){
                subsections = this.createSections(section.subSections);
                let areActive = subsections.map((sec)=>sec.props.active);
                isFound =  (areActive.some(this.trueArrayChecker) ? 0 : -1)
            }else{
                isFound = JSON.stringify(section).toLowerCase().indexOf(this.props.toSearch);
            }

            isFound = (isFound!==-1 ? true : false);

            return <SectionBody 
                        active={isFound}
                        key={section.sectionId} 
                        data={section}
                        toSearch={this.props.toSearch}>
                            {subsections}
                    </SectionBody>;
        })
    }
    render() {
        const sections = this.createSections(this.props.data.sections);
        const areActive = sections.map((sec)=>sec.props.active);
        const isFound = (areActive.some(this.trueArrayChecker) ? true : false)
        
        let forReturn = (<div>
                <div className={"title " + (isFound ? 'active' : '')}>
                    <i className="dropdown icon"></i>
                    {this.props.data.ruleName!=undefined && this.props.data.ruleName + ", "}
                    {this.props.data.validStart!=undefined && this.dbDateToHumanRead(this.props.data.validStart)}
                </div>
                <div className={"content " + (isFound ? 'active' : '')}>
                    {this.props.data.approvedDate!=undefined && 'Hyväksytty: '+this.dbDateToHumanRead(this.props.data.approvedDate)}
                    <br />
                    {this.props.data.validStart!=undefined && ' Voimassaolo: '+this.dbDateToHumanRead(this.props.data.validStart)+' - '}
                    {this.props.data.validEnd!=undefined && this.dbDateToHumanRead(this.props.data.validEnd)}
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