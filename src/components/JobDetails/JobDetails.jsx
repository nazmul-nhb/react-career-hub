import { useLoaderData, useParams } from "react-router-dom";
import left from '../../assets/images/bg1.png';
import right from '../../assets/images/bg2.png';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intID = parseInt(id);
    const job = jobs.find(job => job.id === intID);
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;
    return (
        <div>
            <div className="flex justify-center">
                <img src={left} alt="left" className="" />
                <h2 className="">Job Details</h2>
                <img src={right} alt="right" className="" />
            </div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2>Job Descriptions:</h2> <p>{job_description}</p>
                    <h2>Job Responsibility:</h2> <p>{job_responsibility}</p>
                    <h2>Educational Requirements:</h2> <p>{educational_requirements}</p>
                    <h2>Experiences:</h2> <p>{experiences}</p>
                </div>
                <div className="border">
                    <h2>Job Details</h2>
                    <h2 className="">Salary:</h2><p>{salary}</p>
                    <h2 className="">Job Title:</h2><p>{job_title}</p>
                    <h1>Contact Information</h1>
                    <h2 className="">Phone:</h2><p className="">{contact_information.phone}</p>
                    <h2 className="">Email:</h2><p className="">{contact_information.email}</p>
                    <h2 className="">Address:</h2><p className="">{contact_information.address}</p>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;