import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Progress } from 'reactstrap'




function ProfileCard({ bdata }) {

    if (bdata != null) {
        return (

            <div>
                <Card key={bdata.id} className="Card-Color">
                    <CardImg top src={bdata.image} alt={bdata.name} />
                    <CardBody>
                        <CardTitle className="Card-Title">{bdata.name}</CardTitle>
                        <CardText className="cardtext">
                            {bdata.company}
                        </CardText>
                        <CardText className="cardtext">
                            {bdata.designation}
                        </CardText>
                    </CardBody>
                </Card>
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

        <div>

            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">I am a Web Developer.</p>
            <hr className="my-2" />



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

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 col-sm col-xs">
                        <ProfileCard bdata={props.biodata} />
                    </div>
                    <div className="col-12 col-md-5 col-sm col-xs">
                        <div className="container">
                            <div className="jumbotron">
                                <Portfolio />
                            </div>
                        </div>
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



