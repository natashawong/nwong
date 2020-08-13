import React, {Component} from 'react';
import './Experience.css';
import LeftTab from '../Components/LeftTab';

import bullet from '../Assets/bullet.png';

//TODO in the future: auto calculate spacing depending on amount of text!!

export default class Experience extends Component {
    render() {
        return(
            <div>
                <LeftTab selected={"experience"}/>
                <div className="experienceContainer">
                    <div className="block" style={{paddingRight: "3%"}}>
                        <p>
                            <b>MoneyLion<br  />
                            Software Engineer Intern, Mobile</b><br />
                            Coming straight out of high school and onto the mobile team meant I had to work twice as hard to pick up things on the job.
                            It was a great holistic experience learning about working on a team (and the tools that come with it), best practices in coding large projects, and fast-paced startup culture.
                        </p>

                        <div style={{padding: "4%"}}></div>

                        <p id="date" style={{textAlign: "right"}}>
                            <span id="redText">2018-2019</span><br  />
                            Semesters                            
                        </p>

                        <div style={{padding: "2%"}}></div>

                        <p>
                            <b>MoneyLion<br  />
                            Software Engineer Intern, Mobile</b><br />
                            Coming back for the second time was extremely rewarding as I got to see how much I had progressed in a year. I got to see my code in production,
                            was given more responsibility, and learnt a lot more about maintaining good lasting code. The codebase had changed drastically, and I got a better idea
                            of what it means to replace legacy code and continually improve on the existing codebase, especially in a startup where things move fast.
                        </p>

                        <div style={{padding: "4%"}}></div>

                        <p id="date" style={{textAlign: "right"}}>
                            <span id="redText">2020</span><br  />
                            Summer
                        </p>


                    </div>

                    <img src={bullet} alt={bullet} id="bullet" /> {/*paddingTop: "9%" */}
                    <img src={bullet} alt={bullet} id="bullet" style={{paddingTop: "23%", marginLeft: "-16px"}} />
                    <img src={bullet} alt={bullet} id="bullet" style={{paddingTop: "37%", marginLeft: "-16px"}}  />
                    <img src={bullet} alt={bullet} id="bullet" style={{paddingTop: "51%", marginLeft: "-16px"}}  />

                    <div className="block" style={{borderRight: 0}}>
                        <p className="resume">
                            <a href="https://drive.google.com/file/d/1geJY6qi0J83dWQPeZE444KAYsGvwpMYG/view?usp=sharing">Click here for the formal resume!</a>
                        </p>

                        <div style={{padding: "2%"}}></div>

                        <p id="date">
                            <span id="redText">2018</span><br  />
                            Summer
                        </p>

                        <div style={{padding: "-1%"}}></div>

                        <p>
                            <b>Roberts Environmental Center<br  />
                            Research Analyst</b><br />
                            This gave me the chance to improve my research skills, simultaneously doing CS projects like websites too. I had fun culminating months of research and
                            presenting it into the solar panel payback calculator I built with React.
                            <br  />
                            <b>Claremont Consulting Group<br  />
                            Analyst</b><br />
                            Being able to consult and work with real life companies to solve their problems provides me a product perspective complimentary to my CS knowledge.
                            It's a different view of being able to understand and be thoughtful about a product's users, pain points, and possible improvements.
                        </p>

                        <div style={{paddingTop: "1%"}}></div>

                        <p id="date" style={{textAlign: "left"}}>
                            <span id="redText">2019</span><br  />
                            Summer                            
                        </p>

                        <div style={{paddingTop: "4%"}}></div>

                        <p>
                            <b>Naga Motors<br  />
                            Co-Founder</b><br />
                            Amidst the COVID-19 pandemic, I've chosen to start my own startup over doing a remote internship. I think there'd be more to gain from taking ownership over my own product
                            and building it from scratch than working on something remotely, where I could lack mentorship. Leveraging my father's 25 years in the automotive industry,
                            I used his market knowledge to come up with a startup that lets consumers cut out numerous middlemen to import their own car.
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}