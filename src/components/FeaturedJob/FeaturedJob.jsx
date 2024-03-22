import PropTypes from 'prop-types'

const FeaturedJob = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div>
            <img src={logo} alt={company_name} />
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired,
}

export default FeaturedJob;