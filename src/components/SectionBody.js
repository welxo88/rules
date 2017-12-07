import React from 'react';

class SectionBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containsFound: false
        };
    }

    render() {
        let paragraphs = [];
        if(this.props.data.paragraphs!=undefined){
            paragraphs = this.props.data.paragraphs.map((paragraph,index) =>{
                let parToShow = paragraph.paragraphText;
                
                if(this.props.active==true){
                    parToShow = parToShow.replace( new RegExp( "(" + this.props.toSearch + ")" , 'gi' ), "<mark>$1</mark>" );
                }
                if(paragraph.paragraphIsPartOfList == true){
                    parToShow = '\u2022 ' + parToShow;
                }
                return (
                    <p 
                        key={paragraph.paragraphId} 
                        style={{paddingLeft: paragraph.paragraphIsSub == true && '2em'}}
                        dangerouslySetInnerHTML={{ __html: parToShow }}>
                    </p>
                );
            });
        }

        let secHeadToShow = this.props.data.sectionHeader;
        
        if(this.props.active==true){
            secHeadToShow = secHeadToShow.replace( new RegExp( "(" + this.props.toSearch + ")" , 'gi' ), "<mark>$1</mark>" );
        }
        //console.log(this.props.data.sectionId + ' ' + this.props.active);

        return (<div>
            <div className={"title " + (this.props.active ? 'active' : '')}>
                <i className="dropdown icon"></i>
                <span dangerouslySetInnerHTML={{ __html: this.props.data.sectionId+'. '+secHeadToShow }}></span>
            </div>
            <div className={"content " + (this.props.active ? 'active' : '')}>
                {paragraphs}
                {this.props.children}
            </div></div>);
    }
}

export default SectionBody;