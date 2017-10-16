import React from 'react';

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

export default SectionBody;