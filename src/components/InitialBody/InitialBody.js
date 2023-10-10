import { Row, Col, Button } from 'react-bootstrap';
import './InitialBody.css';
import Fade from 'react-reveal/Fade';

export default function InitalBody() {
    return (
        <Row className='initialBody' style={{ background: `url(${process.env.PUBLIC_URL + "images/backgroundimage1.png"})` }}>
            <Fade bottom>
                <Col sm={6}>
                    <Row className='main-title'>Transform Your Business with Software</Row>
                    <Row className='sub-title mt-4'>Get ahead of the competition with FETCHCODE's cutting-edge technology solutions.</Row>
                    <Button className='learn-more-button mt-3' variant="light">Learn More</Button>
                </Col>
                <Col>
                </Col>
            </Fade>
        </Row>
    );
}