import { Row, Col } from 'react-bootstrap';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';

export default function AboutUs() {
    return (
        <div className="aboutus">
            <Fade bottom>
                <Row className='aboutus'>
                    <Col>
                        <h2>About Us</h2>
                        <p className='mt-3'>Welcome to Fetchcode, a leading software company based in Hyderabad, TG. We specialize in delivering innovative software solutions that empower businesses to thrive in the digital era.</p>
                        <p className='mt-3'>With a team of highly skilled professionals and a passion for cutting-edge technology, we strive to exceed our clients' expectations by providing tailored software solutions that drive growth and efficiency. Whether you need a custom software application, web development services, or mobile app solutions, we have the expertise to deliver results that propel your business forward.</p>
                    </Col>
                    <Col>
                        <img className='aboutusimage' src={process.env.PUBLIC_URL + "images/backgroundimage1.png"} alt='image' />
                    </Col>
                </Row>
            </Fade>
        </div>
    );
}