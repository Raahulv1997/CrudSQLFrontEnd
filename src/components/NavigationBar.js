import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const NavigationBar = () => {
  return (
 <>
 
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Redux Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        <LinkContainer to={'/'}><Nav.Link>Home</Nav.Link></LinkContainer>  
        <LinkContainer to={'/adduser'}><Nav.Link>Add user</Nav.Link></LinkContainer> 
          
         
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  )
}

export default NavigationBar
