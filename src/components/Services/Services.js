import './Services.css';
import ContentOnCard from './../ContentOnCard/ContentOnCard.js';

export default function Services() {
    return (
        <div className='services'>
            <ContentOnCard title='Custom Software Development' subTitle='Tailored software solutions that cater to your unique business needs.' image='bg-image2.png' />
            <ContentOnCard title='Mobile App Development' subTitle='Innovative mobile applications that enhance user experience and drive engagement.' image='bg-image3.png' />
            <ContentOnCard title='Web Development Services' subTitle='Professional web development services to create stunning and functional websites.' image='bg-image4.png' />
        </div>
    );
}