import './Jobs.css';
import JobCard from './../JobCard/JobCard.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function Jobs() {

    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://fetch-code-baas.onrender.com/job-updates`)
            .then(response => {
                setJobDetails(response.data);
            })
    }, [])

    return (
        <div className='jobs'>
            {
                jobDetails.map(job => {
                    return (
                        <Fade bottom>
                            <JobCard role={job.role} company={job.company} image_url={job.image_url} experience={job.experience} expected_ctc={job.expected_ctc} requirements={job.requirements} link={job.link} />
                        </Fade>
                    );
                })
            }
        </div>
    );
}