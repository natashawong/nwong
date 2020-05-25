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
                        <img id="contactPic" src={git} alt={"GitHub"} />
                        <img id="contactPic" src={mail} alt={"Gmail"} />
                        <img id="contactPic" src={linkedin} alt={"LinkedIn"} />
                    </div>
                </div>
            </div>
        )
    }
}