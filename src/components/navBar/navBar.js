import React from 'react'
import {Navbar,Nav,FormControl,Form,Button,InputGroup,Image} from 'react-bootstrap'
import './navbar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import { TiShoppingCart } from 'react-icons/ti';
import DeliveryMan from '../../Assets/DeliveryMan.png'


function NavBar(){
    return(
        <div className='NavBar'>

            <Navbar collapseOnSelect expand="lg" bg='light' variant="light">

          
    <Navbar.Brand href="#home"><img src={DeliveryMan} width='50' hight='50'/>SmartGrocerry</Navbar.Brand>
    
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">

        <Nav.Link>
        <Form >
        
        <InputGroup className="search">
    <FormControl
      placeholder="search"
      aria-label="search"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">   <FontAwesomeIcon icon={faSearch }  /></InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

       
        
        </Form>
        </Nav.Link>
        
      <Nav.Link className="navigationTab" href="#home"><TiShoppingCart/></Nav.Link>
      <Nav.Link className="navigationTab" href="#home"><FontAwesomeIcon icon={faPhoneAlt}/>+91779967314</Nav.Link>

      <Nav.Link className="navigationTab"  href="#features">Login/Register</Nav.Link>
      
    
    </Navbar.Collapse>
    
   
  </Navbar>
        </div>

    )
}
export default NavBar