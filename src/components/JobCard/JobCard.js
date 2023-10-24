import './JobCard.css';
import { Row, Col, Button } from 'react-bootstrap';

export default function JobCard(props) {
    return (
        <div className='jobcard'>
            <div className='job-header'>
                <div>
                    <div className='job-title'>{props.role}</div>
                    <div className='company-name'>{props.company}</div>
                </div>
                <div>
                    <img className='company-image' src={props.image_url} />
                </div>
            </div>
            <div className='mt-2 job-details'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/briefcase.svg'} alt="My SVG Icon" /> {props.experience}
                </div>
                <div>|</div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/salaryIcon.svg'} alt="My SVG Icon" /> {props.expected_ctc}
                </div>
                <div>|</div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/locIcon.svg'} alt="My SVG Icon" /> Not Disclosed
                </div>
            </div>
            <div className="mt-1 job-description">
                <img src={process.env.PUBLIC_URL + '/images/paper.png'} />
                {props.requirements}
            </div>
            <div className='jobApply mt-3'>
                <a target='_black' href={props.link}> 
                    <Button variant="warning">Apply now</Button>
                </a>
            </div>
        </div>
    );
}