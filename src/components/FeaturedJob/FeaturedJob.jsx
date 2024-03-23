import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const FeaturedJob = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt={company_name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{job_title}</h2>
                <p className='text-xl'>{company_name}</p>
                <div className='text-[#9873FF] flex gap-4'>
                    <button className='px-5 py-2 font-bold border rounded border-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-bold border rounded border-[#7E90FE]'>{job_type}</button>
                </div>
                <div className="flex gap-1 items-center text-xl">
                    <IoLocationOutline></IoLocationOutline><h2>{location}</h2>
                    <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar><h2>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired,
}

export default FeaturedJob;