import  React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle}  from 'reactstrap'



function ProfileCard ({bdata})  {
  
        if(bdata!=null){
            return(
            <div>
                <Card key={bdata.id}>
                    <CardImg top src={bdata.image} alt={bdata.name}/>
                    <CardBody>
                        <CardTitle>{bdata.name}</CardTitle> 
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
        else{
            return (
                <div></div>
            )
        }
    
}


const Home=(props)=> {

//first check if props is not empty
   if(props.biodata!=null){
        return(
            <div className="container">
                <div className="col-12 col-md-5 m-1">
                    <ProfileCard bdata={props.biodata}/>
                </div>
            </div>
        )
   }
   else{
       return (
           <div>nothing</div>
       )
   }
}

export default Home;