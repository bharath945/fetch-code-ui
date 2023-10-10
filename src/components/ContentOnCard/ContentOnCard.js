import './ContentOnCard.css';
import Fade from 'react-reveal/Fade';

export default function ContentOnCard(props) {
    return (
        <div class='contentoncard' style={{ background: `url(${process.env.PUBLIC_URL + "images/" + props.image})` }}>
            <Fade bottom>
                <div className="content">
                    <h2>{props.title}</h2>
                    <p className='mt-3'>{props.subTitle}</p>
                </div>
            </Fade>
        </div>
    );
}