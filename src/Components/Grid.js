import React, {Component} from 'react';
import './Grid.css';
import { COLOURS } from '../Enums/Enums';

export default class Grid extends Component {
    render() {
        return(
            <div className="gridBox">
                <a href={this.props.link}>
                <img src={this.props.image} alt={this.props.image} className="image"/>
                </a>
                <p className="text"><span id="redText">{this.props.title}</span><br />
                {this.props.desc}<br />
                <span id="builtText" style={{borderColor: COLOURS.YELLOW}}>Built with:</span><br />{this.props.tech}</p>
            </div>
        )
    }
}