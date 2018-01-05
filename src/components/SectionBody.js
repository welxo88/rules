import React from 'react';

class SectionBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containsFound: false
        };
        this.toggleInterpretation = this.toggleInterpretation.bind(this);
    }

    toggleInterpretation(id){ return () => {
        let el = document.getElementById(id);
        el.style.display = el.style.display === 'none' ? '' : 'none';
    }}

    render() {
        let paragraphs = [];
        if(this.props.data.paragraphs!=undefined){
            paragraphs = this.props.data.paragraphs.map((paragraph,index) =>{
                let parToShow = paragraph.paragraphText;
                let randomId;
                
                if(this.props.active==true){
                    parToShow = parToShow.replace( new RegExp( "(" + this.props.toSearch + ")" , 'gi' ), "<mark>$1</mark>" );
                }
                if(paragraph.paragraphIsPartOfList == true){
                    parToShow = '\u2022 ' + parToShow;
                }
                if(paragraph.paragraphInterpretation) {
                    randomId = "interpretation-"+paragraph.paragraphId+"-"+Math.floor(Math.random()*1000);
                }

                return (
                    <div 
                        key={paragraph.paragraphId} 
                        style={{paddingLeft: paragraph.paragraphIsSub == true && '2em'}}>
                        
                        <div className="p" dangerouslySetInnerHTML={{ __html: parToShow }} />
                        {paragraph.paragraphInterpretation && 
                            <div className="p">
                                <i className="pink warning circle icon" onClick={this.toggleInterpretation(randomId)}></i>
                                <span id={randomId} style={{display:'none',textAlign:'right',fontStyle:'italic',fontSize:'0.8rem'}}>{paragraph.paragraphInterpretation}<br /></span>
                            </div>
                        }
                        <br />
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