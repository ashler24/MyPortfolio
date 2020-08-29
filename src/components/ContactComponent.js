import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'

function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-centre">
                    <div className="col-6 col-md-6">
                        <Card>
                            <CardTitle>Contact Me</CardTitle>
                            <CardBody>
                                <CardText>
                                    <a target="_blank" href="https://twitter.com/pawar2467">
                                        <img align="left" alt="Abhijeet Pawar | Twitter" width="25px" src="https://raw.githubusercontent.com/Akshay2996/Akshay2996/master/assets/twitter.png" />
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/lone_w_olf/">
                                        <img align="left" alt="Abhijeet Pawar | Instagram" width="25px" src="https://raw.githubusercontent.com/Akshay2996/Akshay2996/master/assets/instagram.png" />
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/abhijeet-pawar-b96237130/">
                                        <img align="left" alt="Abhijeet Pawar | LinkedIn" width="25px" src="https://raw.githubusercontent.com/Akshay2996/Akshay2996/master/assets/linkedin.png" />
                                    </a>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;