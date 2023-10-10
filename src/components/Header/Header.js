import { Row, Col, Button, Container } from 'react-bootstrap';
import './Header.css';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';

export default function Header() {
    return (
        <div className="mainHead">
            <div className='header'>
                <div class='subHeader'><img className='fetchCodeLogo' src={process.env.PUBLIC_URL + "/images/fech-code-logo.png"} alt='fetchcode-logo' /></div>
                <div class='contacts'>
                    <a className='whatsapp-icon' target='_blank' href="https://wa.me/919912868479?text=Hello%20FetchCode,+I+need+your+services+to+build+a+project.">
                        <ImWhatsapp size={30} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61552323175233" target="_blank">
                        <FiFacebook size={30} />
                    </a>
                    <a className='instagram-icon' target='_blank' href='https://www.instagram.com/fetch.code/'>
                        <BsInstagram size={30} />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/fetch-code-745458295/'>
                        <GrLinkedinOption size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
}