import { Container } from 'react-bootstrap';
import './Testimonials.css';

function Testimonals() {
  return (
    <Container className='testimonials'>
        <div className="testimonial-card rounded d-flex flex-column justify-content-start align-items-md-start align-items-center w-100">
            <h4><img src = "/invertedComma.jpg"/> <span className='m-3'>Testimonials</span></h4>
            <p className="mt-4 mb-4">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            <div className="testimonial d-flex flex-md-row flex-column-reverse justify-content-between align-items-center w-100 gap-md-5 gap-2">
                <div className="audio-track">
                    <audio className='audio controls' src='' controls />
                </div>
                <div className="person d-flex align-items-center">
                    <img src="/testimonal.jpg" alt="profile" />
                    <div className="details d-flex flex-column  m-4">
                        <span className="name" style={{color: "#8064A2"}}>Subha Nagarjan</span>
                        <span className="profession" style={{color: "#0096C8"}}>Classical Dancer</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Testimonals;
