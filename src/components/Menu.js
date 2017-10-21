import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (<div className="ui borderless main menu placeholder inverted">
                    <div className="ui text container">
                        <div className="header item">
                            {this.props.view=='cards' && <Link to="/cards"><i className="large inverted home icon"></i></Link>}
                            {this.props.view=='list' && <Link to="/"><i className="large inverted home icon"></i></Link>}
                        </div>
                        <div className="right menu">
                            <div className={this.props.view=='cards' || this.props.view=='rule' ? 'item active' : 'item'}>
                                <Link to="/cards"><i className="large inverted block layout icon"></i></Link>
                            </div>
                            <div className={this.props.view=='list' ? 'item active' : 'item'}>
                                <Link to="/"><i className="large inverted list layout icon"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Menu;