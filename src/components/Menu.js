import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (<div className="ui borderless main menu placeholder inverted">
                    <div className="ui text container">
                        <div className="header item">Rule§ <sup>&alpha;lpha</sup></div>
                        <div className="right menu">
                            <div class="item">
                                <div class="ui icon input">
                                    <input type="text" placeholder="Etsi..." onChange={this.props.searchFunc} />
                                    <i class="search link icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Menu;