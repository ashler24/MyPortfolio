import React,{Component} from 'react';
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component{
    
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen:false
        }
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){

        return (
            <React.Fragment>
                <Navbar expand="md">
                    <div className="container" id="navbar-body">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="Navbar-Brand mr-auto">Abhijeet Pawar</NavbarBrand>    
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto text-bold">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutme">About Me</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactme">Contact Me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>                
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }

}


export default Header;