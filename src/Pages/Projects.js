import React, {Component} from 'react';
import './Projects.css';
import LeftTab from '../Components/LeftTab';
import Grid from '../Components/Grid';

import recSolar from '../Assets/recSolar.png';
import hhWeb from '../Assets/hhWeb.png';
import stockChart from '../Assets/stockChart.png';

export default class Projects extends Component {
    render() {
        return(
            <div>
            <LeftTab selected={"projects"}/>
            <div className="projectsContainer">
                <p id="title">PERSONAL PROJECTS</p>
                <div className="gridRow">
                <Grid 
                image={recSolar} 
                title={"Roberts Environmental Center Solar Payback Calculator"} 
                desc={"Accepts a user's address, average electricity bill, and roof size, and returns their payback period on installing solar panels."}
                tech={"React"}
                />
                <Grid
                image={hhWeb}
                title={"hearhere website"}
                desc={"Multi-page website providing information on events, activities, and articles related to hearhere."}
                tech={"React, React-Router, CSS"}
                />
                <Grid
                image={stockChart}
                title={"Stock Chart Comparison"}
                desc={"Compares the Apple stock as a benchmark to another stock over different periods of time."}
                tech={"React, Axios, Yahoo Finance API"}
                />
                </div>
            </div>
            </div>
        )
    }
}