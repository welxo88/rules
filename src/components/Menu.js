import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (<div className="ui borderless main menu placeholder inverted">
                    <div className="ui text container">
                        <div href="#" className="header item">
                            <Link to="/">Rules - sääntöjä helpommin</Link>
                        </div>
                        <a href="#" className="item">Etsi</a>
                    </div>
                </div>);
    }
}

export default Menu;