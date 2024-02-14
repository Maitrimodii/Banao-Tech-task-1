import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoAddCircle } from "react-icons/io5";
import './Card2.css';

function Card2() {
  return (
    <Container className="add-page ">
      <Row>
        <Col md={8} className="add-card rounded d-flex flex-column align-items-md-start align-items-center">
          <h4 style={{fontWeight: '600'}}>
            <IoAddCircle style={{color:'#0096C8', fontSize:'33px'}}/> <span className="m-3">Add your own</span>
          </h4>
          <p className="mt-4 mb-4">
            Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, ok done    you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
          <Button variant="outline-primary custom-card-button">Add new</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Card2;
