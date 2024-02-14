import React from 'react';
import { Navbar, Nav, FormControl, Button, Container, InputGroup, FormGroup, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="#FFFFFF" expand="lg" className="shadow-lg custom-navbar">
      <Container className="custom-container d-flex gap-3 align-items-center">
        {/* Logo and Search */}
        <Navbar.Brand>
          <img src="/logo2.jpeg" alt="Your Logo" height="60px" />
        </Navbar.Brand>
        {/* Search input for larger screens */}
        <FormGroup className='flex-grow-1 mx-3 d-none d-lg-block'>
          <InputGroup className='search'>
            <FormControl type="text" placeholder="Search here" className='custom-search-input'/>
            <Button style={{ backgroundColor: "#8064A2" }}>
              <FaSearch />
            </Button>
          </InputGroup>
        </FormGroup>
        {/* Hamburger icon for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar items */}
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="d-flex align-items-center">
            {/* Explore dropdown */}
            <img src='/explore.svg'/>
            <NavDropdown title="Explore" id="explore-dropdown">
                <NavDropdown.Item href="#action1" className='custom-dropdown-item'>People-Community</NavDropdown.Item>
                <NavDropdown.Item href="#action2" className='custom-dropdown-item'>Places-Venues</NavDropdown.Item>
                <NavDropdown.Item href="#action3" className='custom-dropdown-item'>Programs-Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='custom-dropdown-item'>Products-Store</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className='custom-dropdown-item'>Blogs</NavDropdown.Item>
            </NavDropdown>

            {/* Hobbies dropdown */}
            <img src='/Hobbies.svg'/>
            <NavDropdown title="Hobbies" id="hobbies-dropdown">
                <NavDropdown.Item href="#action1" className='custom-dropdown-item'>People-Community</NavDropdown.Item>
                <NavDropdown.Item href="#action2" className='custom-dropdown-item'>Places-Venues</NavDropdown.Item>
                <NavDropdown.Item href="#action3" className='custom-dropdown-item'>Programs-Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='custom-dropdown-item'>Products-Store</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className='custom-dropdown-item'>Blogs</NavDropdown.Item>
            </NavDropdown>

            {/* Notification icon */}
            <Nav.Link href="#notification" className="d-md-block">
              <img src="/notification.svg" alt="Notification" className="mr-3" />
            </Nav.Link>

            <Nav.Link href="#bookmark" className="d-md-block">
              <img src="/bookmark.svg" alt="Bookmarks" className="mr-3" />
            </Nav.Link>

            {/* Cart icon */}
            <Nav.Link href="#cart" className="d-md-block">
              <img src="/cart.svg" alt="Cart" className="mr-3" />
            </Nav.Link>

            {/* Sign In button */}
            <Nav.Link href="#signin">
              <Button variant="outline-primary" style={{ width: '100%', borderColor: '#8064A2', color: '#8064A2', background: 'none', fontSize: '14px' }}>Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
