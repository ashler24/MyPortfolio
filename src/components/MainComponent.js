import React,{Component} from 'react';
import Header from './HeaderComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import { BIODATA } from '../shared/biodata'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            biodata:BIODATA
        }
    }

    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={()=><Home biodata={this.state.biodata[0]}/>} />
                    <Route path="/aboutme" component={About} />
                    <Route path="/contactme" component={Contact} />
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default Main;