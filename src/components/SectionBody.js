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
                    <div 
                        key={paragraph.paragraphId} 
                        style={{paddingLeft: paragraph.paragraphIsSub == true && '2em'}}>
                        
                        <div className="p" dangerouslySetInnerHTML={{ __html: parToShow }} />
                        {paragraph.paragraphInterpretation && <div>
                            <div className="ui button">Show fluid popup</div>
                            <div className="ui fluid popup top left transition hidden">
                                <div className="ui one column divided center aligned grid">
                                    <div className="column">{paragraph.paragraphInterpretation}</div>
                                </div>
                            </div>
                            </div>
/*
                            <div 
                                className="ui icon" 
                                data-position="bottom left"
                                data-variation="wide small"
                                data-title="Tulkinta"
                                data-content={paragraph.paragraphInterpretation}>
                                <i className="pink warning circle icon"></i>
                            </div>*/
                        }
                        
                    </div>
                );
            });
        }

        let secHeadToShow = this.props.data.sectionHeader;
        
        if(this.props.active==true){
            secHeadToShow = secHeadToShow.replace( new RegExp( "(" + this.props.toSearch + ")" , 'gi' ), "<mark>$1</mark>" );
        }
        //console.log(this.props.data.sectionId + ' ' + this.props.active);

        //TEST PROPERLY HOW THIS WORKS
        // style={{display: ((!this.props.active && this.props.toSearch != '') ? 'none' : '')}}
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