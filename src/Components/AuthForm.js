import React, { useState } from 'react';
import { Button, Form, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaEyeSlash } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';

function AuthForm({title, buttonLabel}) {
  const [show, setShow] = useState(false);

  return (
    <Container fluid className="d-flex flex-md-column flex-column-reverse w-100 p-0 mt-4">
      <Row className="auth-btns-group d-grid gap-3">
        <Col>
          <Button variant="outline-primary" className='w-100 d-flex align-items-center custom-button-hero gap-5'>
            <FcGoogle style={{marginRight:"11%", }}/><span> Continue with Google</span>
          </Button>
        </Col>
        <Col>
          <Button variant="outline-primary" className='w-100 d-flex align-items-center custom-button-hero gap-5'>
            <FaFacebook style={{marginRight:"11%", }}/>Continue with Facebook
          </Button>
        </Col>
      </Row>
      <div className='divider mb-3 mt-3 position-relative'>
        <hr className='border-2' /><span className='divider-text'>Or connect with</span>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <FormControl type="email" placeholder='Email' style={{ fontSize: '12px', fontWeight:400 }}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex align-items-center">
          <InputGroup>
            <FormControl type="password" placeholder="Password" style={{ fontSize: '12px' }} />
          </InputGroup>
        </Form.Group>
        
        {title === "SignIn" ? (
        <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Check type="checkbox" label={<small>Remember me</small>} />
            <a href='#' style={{ textDecoration: "none", color: "black" }}>
            <small><IoMdLock style={{ color: "#939CA3" }} /> Forgot password?</small>
            </a>
        </Form.Group>
        ) : (
        <div className="mb-3 d-flex justify-content-between" style={{ color: "#939CA3" }}> 
        <div className='password-meter'>
        <div className="meter-section"></div>
        <div className="meter-section"></div>
        </div>
        
            
            
            <small style={{ fontSize: "10px", fontWeight: 600 }}>Password Strength</small>
        </div>
        )}

        <Button variant="outline-primary" className="w-100 custom-button-hero align-items-center">
          {buttonLabel}
        </Button>
      </Form>
    </Container>
  );
}

export default AuthForm;