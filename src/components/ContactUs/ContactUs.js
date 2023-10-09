import { Row, Col, Button } from 'react-bootstrap';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <Row className="contactus">
            <Col sm={6}>
                <h3>Contact Us Today</h3>
                <p className='mt-3 contactus-para'>Fill out the form below to get in touch with us. We are here to answer any questions you may have and provide you with the best solutions for your software needs.</p>
                <div className='emialId mt-5'>
                    <a href="mailto:fetchcode99@gmail.com?subject = Feedback&body = Message">
                        fetchcode99@gmail.com
                    </a>
                    <div></div>
                    <a href="tel:+91 9912868479">+91 9912868479</a>
                </div>
            </Col>
            <Col sm={6}>
                <Row>
                    <Col sm={6}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control mt-1" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">E-mail</label>
                            <input type="email" class="form-control mt-1" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control mt-1" rows="3"></textarea>
                        </div>
                    </Col>
                </Row>
                <div className='mt-4 send-button-row'>
                    <Button className='send-button' variant="light">Send</Button>
                </div>
            </Col>
        </Row>
    );
}