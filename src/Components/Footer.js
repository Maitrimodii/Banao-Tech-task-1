import React from 'react';
import { Container, Row, Col, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGooglePlus, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <>
                <Container className='footer'>
                    <Row>
                        <Col md={3} className="link-category">
                            <h6 className='pb-2 mt-4'>Hobbycue</h6>
                            <Nav className='flex-column '>
                                <Nav.Link href="#" className='navLinls'>About Us</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Our Services</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Work with Us</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>FAQ</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Contact Us</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={3} className="link-category">
                            <h6 className='pb-2 mt-4'>How Do I</h6>
                            <Nav className='flex-column'>
                                <Nav.Link href="#" className='navLinls'>Sign up</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Add a Listing</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Claim Listing</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Post a Query</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Add a Blog Post</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={3} className="link-category">
                            <h6 className='pb-2 mt-4'>Quick Links</h6>
                            <Nav className='flex-column' >
                                <Nav.Link href="#" className='navLinls'>Listings</Nav.Link>
                                <Nav.Link href="#"  className='navLinls'>Blog Posts</Nav.Link>
                                <Nav.Link href="#"  className='navLinls'>Shop/ store</Nav.Link>
                                <Nav.Link href="#" className='navLinls'>Community</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={3} className="link-category">
                            <h6 className='pb-2 mt-4'>Social Media</h6>
                            <Nav className='d-flex justify-content-between'>
                                <Nav.Link href="https://www.facebook.com/" className='icons'><FaFacebook /></Nav.Link>
                                <Nav.Link href="https://www.twitter.com"  className='icons'><FaTwitter /></Nav.Link>
                                <Nav.Link href="https://www.instagram.com"  className='icons'><FaInstagram /></Nav.Link>
                                <Nav.Link href="https://www.pinterest.com"  className='icons'><FaPinterest /></Nav.Link>
                                <Nav.Link href="https://www.googleplus.com"  className='icons'><FaGooglePlus /></Nav.Link>
                                <Nav.Link href="https://www.youtube.com"  className='icons'><FaYoutube /></Nav.Link>
                                <Nav.Link href="https://www.telegram.com"  className='icons'><FaTelegram /></Nav.Link>
                                <Nav.Link href="./" className='icons'><FaEnvelope /></Nav.Link>
                            </Nav>
                            <h6 className='pb-2 mt-4'>Invite Friends</h6>
                            <InputGroup >
                                <Form.Control type="text" placeholder="Email ID" style={{fontSize: "12px",fontWeight:'400' }}/>
                                <Button style={{ backgroundColor: "#8064A2" }}>
                                    Invite
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

export default Footer;
