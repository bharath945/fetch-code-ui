import { Row, Col, Button, Container } from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div class='subHeader'><img className='fetchCodeLogo' src={process.env.PUBLIC_URL + "/images/fech-code-logo.png"} alt='fetchcode-logo' /></div>
            <div class='subHeader'><Button className='booknow-button' variant="light">Book Now</Button></div>
        </div>
    );
}