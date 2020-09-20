import React from 'react';
import { Progress } from 'reactstrap'
import { ImTwitter,ImGithub,ImLocation } from "react-icons/im";





function ProfileCard({ bdata }) {

    if (bdata != null) {
        return (

            <div>
                <img className="round shade margin-top" src={bdata.image} height="150" width="150" />
                <div className="col-12">
                    <h1 className="text-thinner">{bdata.name}</h1>
                    <p className="text-uppercase text-wide margin">Project Engineer</p>
                    <p className="margin">
                    When I'm not at my computer, I like to do yoga and read books.
           
                    </p>
                    <p className="margin">
                        
                        <a title="Location" href="#"><ImLocation />&nbsp;Pune, MH</a>&nbsp;&nbsp;
                        <a title="Twitter" href="https://twitter.com/pawar2467"><ImTwitter />&nbsp;Abhijeet Pawar</a>&nbsp;&nbsp;
                        <a title="GitHub" href="https://github.com/ashler24"><ImGithub />&nbsp;ashler24</a>&nbsp;&nbsp;
                    </p>
                </div>
            </div>



        )
    }
    else {
        return (
            <div></div>
        )
    }

}

function Portfolio() {

    return (

        <div className="container">
            <div id="skills" className="row border-top">
                <div>
                    <h4>Specialty</h4>
                    <ul>
                        <li>Java Programming</li>
                        <li>Web App Development</li>
                    </ul>
                    </div>
                    <div >
                    <h4>Skills</h4>      
                            <div className="col-12">
                                <code>Java</code>
                                <code>JavaScript</code>
                                <code>Angular</code>
                                <code>React</code>
                            </div>
                            <div className="col-12">
                                <code>MySQL</code>
                                <code>MongoDB</code>
                                <code>Docker</code>
                                <code>Git</code>
                                <code>GitHub</code>
                            </div>
                </div>
            </div>
            <div id="experience" className="row">
                <div className="offset-1"><hr className="margin-top"/></div>
                <div className="col-12">
                <h2>Experience</h2>
                </div>
                <div className="col-12">
                <h4>
                    <a title="CDAC R&D" href="https://www.cdac.in/">CDAC, R&D.</a> - Project Engineer
                </h4>
                <p>
                    Pune, MH - <i>Febuary 2020 - Current</i> (1 year)<br/>
                  
                    <code className="text-small">Java</code>
                    <code className="text-small">Oracle</code>
                    <code className="text-small">SpringMVC</code>
                    <code className="text-small">J2EE</code>
                </p>
            </div>
        </div>
        </div>

    )
}


function Progressweb() {
    return (
        <div>
            <Progress animated color="info" value={50}>Development still in progress....!!</Progress>
        </div>
    )
}


const Home = (props) => {

    //first check if props is not empty
    if (props.biodata != null) {
        return (

            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <ProfileCard bdata={props.biodata} />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12">
                      <Portfolio />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Progressweb />
                    </div>
                </div>


            </div>
        )
    }
    else {
        return (
            <div>nothing</div>
        )
    }
}

export default Home;



