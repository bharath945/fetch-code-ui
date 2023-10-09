import './ContentBelowCard.css';

export default function ContentBelowCard(props) {
    return (
        <div className="contentbelowcard">
            <img className='contentBelowCardImg' src={props.image} alt="" />
            <h4 className='mt-3'>{props.title}</h4>
            <p className='mt-2'>{props.subTitle}</p>
        </div>
    );
}