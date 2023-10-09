import './ContentOnCard.css';

export default function ContentOnCard(props) {
    return (
        <div class='contentoncard' style={{ background: `url(${process.env.PUBLIC_URL + "images/" + props.image})` }}>
            <div className="content">
                <h2>{props.title}</h2>
                <p className='mt-3'>{props.subTitle}</p>
            </div>
        </div>
    );
}