import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Signin from './Signin';
import Joinin from './Joinin';
import './Hero.css';

function Hero() {
  const [signInTab, setSignInTab] = useState(true);

  return (
    <>
      <Container fluid className='hero mx-auto d-flex flex-column flex-md-row'>
        <Row>
          <Row>
            <Col md={7} className='mb-4 hero-text'>
              <h2 style={{ fontStyle: 'italic', fontSize:"36px" }}>
                Explore your <span style={{ color: '#0096C8' }}>hobby</span> or{' '}
                <span style={{ color: '#8064A2' }}>passion</span>
              </h2>
              <p className='mt-4 py-2'>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate, or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className='py-2'>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services, or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </Col>
            <Col md={4} className='d-flex flex-column' style={{ marginLeft: '7%', position:"relative"}}>
              <Tab.Container
                activeKey={signInTab ? 'signin' : 'joinin'}
                className='w-100 '
              >
                <Nav
                  variant='underline'
                  className='form-tabs justify-content-md-start justify-content-center'
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey='signin'
                      onClick={() => setSignInTab(true)}
                      className={signInTab ? 'active' : ''}
                      style={{
                        color: signInTab ? '#8064A2' : '#939CA3',
                        borderColor: signInTab ? '#8064A2' :' ',
                        fontSize: "20px"
                      }}
                    >
                      Sign In
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey='joinin'
                      onClick={() => setSignInTab(false)}
                      className={!signInTab ? 'active' : ''}
                      style={{
                        color: !signInTab ? '#8064A2' : '#939CA3',
                        borderColor: !signInTab ? '#8064A2' : '',
                        fontSize: "20px"
                      }}
                    >
                      Join In
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='signin'>
                    <Signin />
                  </Tab.Pane>
                  <Tab.Pane eventKey='joinin'>
                    <Joinin />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
          <Row>
            <Col md={7} style={{ padding: '0px', position: 'relative' }}>
              <img src='/Group.png' alt='groups' className='img-fluid' />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
