import React, {Component} from 'react';
import './LeftTab.css';

export default class LeftTab extends Component {
    render() {
        return(
            <div className="bigContainer">
                <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="100" height="100" stroke="black" stroke-width="3" stroke-linejoin="bevel"/>
                <line x1="1.93934" y1="100.939" x2="100.939" y2="1.93933" stroke="black" stroke-width="3"/>
                <path d="M39.7969 47H32.7656L19.0781 24.5469V47H12.0469V12.875H19.0781L32.7891 35.375V12.875H39.7969V47Z" fill="black"/>
                <path d="M80.625 79.1562L85.2188 54.875H92.2266L84.6562 89H77.5781L72.0234 66.1719L66.4688 89H59.3906L51.8203 54.875H58.8281L63.4453 79.1094L69.0703 54.875H75.0234L80.625 79.1562Z" fill="black"/>
                </svg>
                
                <div className="textBlock">
                    <h1>Hi. I'm <span id="redText">Natasha Wong</span></h1>
                    <h1>aspiring <span id="redText">software engineer</span>,</h1>
                    <h1>current CS major at</h1>
                    <h1>Claremont Mckenna</h1>
                    <h1>College.</h1>
                </div>

            </div>
        )
    }
}