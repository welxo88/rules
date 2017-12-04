import React from 'react';

class SectionBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let paragraphs = [];
        if(this.props.data.paragraphs!=undefined){
            paragraphs = this.props.data.paragraphs.map((paragraph,index) =>
                <p key={paragraph.paragraphId} style={{paddingLeft: paragraph.paragraphIsSub == true && '2em'}}>
                    {paragraph.paragraphIsPartOfList == true && '\u2022 '}
                    {paragraph.paragraphText}
                </p>
            );
        }

        return (<div>
            <div className="title">
                <i className="dropdown icon"></i>
                {this.props.data.sectionId+'. '+this.props.data.sectionHeader}
            </div>
            <div className="content">
                {paragraphs}
                {this.props.children}
            </div></div>);
    }
}

export default SectionBody;