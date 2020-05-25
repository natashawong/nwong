import React, {Component} from 'react';
import './LeftTab.css';
import logo from '../Assets/logo.png';
import {COLOURS} from '../Enums/Enums';

import {Link} from 'react-router-dom';

export default class LeftTab extends Component {
    render() {
        return(
            <div className="bigContainer">
                <img src={logo} alt={logo} style={{height: 80, padding: 40}}/>
                <ul style={{listStyleType: "none"}}>
                    <li><Link to='/' className="link" style={{borderColor: this.props.selected === "about" ? COLOURS.YELLOW : COLOURS.BEIGE}}>About Me</Link></li>
                    <li><Link to='/projects' className="link" style={{borderColor: this.props.selected === "projects" ?  COLOURS.YELLOW : COLOURS.BEIGE}}>Projects</Link></li>
                    <li><Link to='/resume' className="link" style={{borderColor: this.props.selected === "resume" ?  COLOURS.YELLOW : COLOURS.BEIGE}}>Resume</Link></li>
                    <li><Link to='/contact' className="link" style={{borderColor: this.props.selected === "contact" ?  COLOURS.YELLOW : COLOURS.BEIGE}}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}