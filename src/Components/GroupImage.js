import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './GroupImage.css';

const GroupImage = () => {
  return (
    <Container className='imgSection'>
        <h2>Your <span style={{color: "#8064A2"}}>Hobby</span>, Your <span style={{color: "#0096C8"}}>Community...</span></h2>
        <button className='btn mt-4 mb-5 oultine-primary'>Get started</button>
        <img src="/lastGroup.png"  alt="" style={{width:'100%'}}/>
    </Container>
  )
}

export default GroupImage