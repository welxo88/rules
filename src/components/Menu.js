import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (<div className="ui borderless main menu placeholder inverted">
                    <div className="ui text container">
                        <div className="header item">Rule§</div>
                        <div className="right menu">Search</div>
                    </div>
                </div>);
    }
}

export default Menu;