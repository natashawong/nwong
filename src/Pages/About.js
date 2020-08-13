import React, {Component} from 'react';
import './About.css';
import LeftTab from '../Components/LeftTab';

export default class About extends Component {
    render() {
        return(
            <div>
            <LeftTab selected={"about"}/>
            <div className="container">
                <div className="title">
                    <p style={{fontSize: 42, marginBottom: 7}}>
                        Hi. I'm <span id="redText">Natasha Wong</span>, aspiring <span id="redText">software engineer</span>, current CS major at Claremont McKenna College.
                    </p>
                </div>
                <div className="subtitle">
                    <p style={{fontSize: 20, marginTop: 0}}>
                        I'm passionate about everything <span id="redText">startup</span>, <span id="redText">fintech</span>, and <span id="redText">social entrepreneurship</span>.
                    </p>
                </div>

                <div className="additionalInfo">
                    <p><span style={{fontSize: 20, textDecoration: "underline"}}><span id="redText">Technologies</span> I’m most familiar with are:</span><br  />
                    MOBILE 📱: React Native, React-Redux, Redux-Saga <br  />
                    WEB 🖥: React, HTML, CSS, NodeJS, Express, Mongoose <br  />
                    DATABASE 💽: MongoDB <br  />
                    GENERAL 💾: JavaScript, TypeScript, Java, Python
                    <br  />
                    <br  />
                    <span p style={{fontSize: 20, textDecoration: "underline"}}>Other <span id="redText">tools</span> I’ve used:</span><br  />
                    Github, Git, JIRA, Heroku, Figma
                    <br  />
                    <br  />
                    <br  />
                    That being said... <br  />
                    I’m always on the lookout for new ways, tools, languages, to learn. So I’m more than willing to pick up something completely different!
                    </p>
                </div>
            </div>
            </div>
        )
    }
}