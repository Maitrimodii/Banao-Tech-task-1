import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosPeople } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { GiBeachBag } from 'react-icons/gi';
import { BsCalendarCheckFill } from 'react-icons/bs';
import './Card1.css';

const Data = [
  {
    title: 'People',
    desc: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
    buttonText: 'Connect',
    theme: '#8064A2',
    icon: <IoIosPeople />
  },
  {
    title: 'Place',
    desc: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
    buttonText: 'Meet up',
    theme: '#77933C',
    icon: <FaLocationDot />
  },
  {
    title: 'Product',
    desc: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
    buttonText: 'Get it',
    theme: '#C0504D',
    icon: <GiBeachBag />
  },
  {
    title: 'Program',
    desc: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
    buttonText: 'Attend',
    theme: '#0096C8',
    icon: <BsCalendarCheckFill />
  }
];

const Card1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container className='casring d-flex gap-3 card-container'>
      <Row>
        {Data.map((item, index) => (
          <Col key={index} lg={6} md={12} className='mb-4'>
            <Card
              className='card'
              style={{
                border: `1px solid ${item.theme}`,
                '--hover-theme': hoveredIndex === index ? item.theme : 'white',
                '--icon-color': hoveredIndex === index ? 'white' : item.theme,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className='card-body'>
                <Card.Title className='card-title'>
                  <span className='card-icon'>{item.icon}</span> {item.title}
                </Card.Title>
                <Card.Text className='mt-4 mb-4 card-desc'>{item.desc}</Card.Text>
                <div className='card-button'>
                  <Button variant="outline-primary custom-button-card1">{item.buttonText}</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card1;
