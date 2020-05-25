import React, {Component} from 'react';
import './Contact.css';
import LeftTab from '../Components/LeftTab';

import git from '../Assets/git.png';
import mail from '../Assets/mail.png';
import linkedin from '../Assets/linkedin.png';


export default class Contact extends Component {
    render() {
        return(
            <div>
                <LeftTab selected={"contact"}/>
                <div className="container">
                    <div className="title">
                        <p style={{fontSize: 42, marginBottom: 7}}>
                            <p>
                            <span id="redText">Liked</span> what you saw?<br  />
                            Bribes in the form of <span id="redText">bubble tea</span> 🍵 work best. <br  />
                            <br />
                            The buttons below will put us in contact!
                            </p>
                        </p>
                    </div>

                    <div className="pics">
                        <a href="https://github.com/natashawong"><img id="gitPic" src={git} alt={"GitHub"} /></a>
                        <a href="mailto:nwong22@cmc.edu"><img id="gmailPic" src={mail} alt={"Gmail"} /></a>
                        <a href="https://www.linkedin.com/in/natasha-wong-94066b147/"><img id="linkedinPic" src={linkedin} alt={"LinkedIn"}/></a>
                    </div>
                </div>
            </div>
        )
    }
}