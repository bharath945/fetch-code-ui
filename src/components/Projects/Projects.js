import './Projects.css';
import ContentBelowCard from './../ContentBelowCard/ContentBelowCard.js';

export default function Projects() {
    return (
        <div id="projectsSection" className='projects'>
            <div className="projecthead">
                Projects
            </div>
        <div className="project-card">
            <ContentBelowCard title='B.Tech Student Projects' subTitle='Unlock academic success with our B.Tech projects. We provide cost-effective solutions, ensuring high-quality projects at budget-friendly prices for aspiring students.' image={process.env.PUBLIC_URL + "images/bg-image8.png"}/>
            <ContentBelowCard title='Custom Software Development' subTitle='Designed and developed tailored software solutions to optimize business processes and improve efficiency.' image={process.env.PUBLIC_URL + "images/bg-image5.png"}/>
            <ContentBelowCard title='Web Application Development' subTitle='Built responsive and user-friendly web applications with seamless functionality, enhancing online presence and customer experience.' image={process.env.PUBLIC_URL + "images/bg-image6.png"}/>
            <ContentBelowCard title='Mobile App Development' subTitle='Crafted intuitive and feature-rich mobile applications for iOS and Android platforms, delivering enhanced engagement and convenience.' image={process.env.PUBLIC_URL + "images/bg-image7.png"}/>
            <ContentBelowCard title='Cloud Computing Solutions' subTitle='Provided cutting-edge cloud-based solutions for secure data storage, collaboration, and scalability, enabling businesses to operate efficiently.' image={process.env.PUBLIC_URL + "images/bg-image9.png"}/>
            <ContentBelowCard title='E-commerce Website Development' subTitle='Built robust and visually appealing e-commerce websites with seamless checkout processes, boosting online sales and customer retention.' image={process.env.PUBLIC_URL + "images/bg-image10.png"}/>
        </div>
        </div>
    );
}