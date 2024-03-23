import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobIDs = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIDs.includes(job.id));

            // Alternative Way
/*             
            const jobsAppliedAlt = [];
            for (const id of storedJobIDs){
                const job = jobs.find(job=>job.id===id);
                if (job) {
                    jobsAppliedAlt.push(job);
                }
            }
*/
        }
    }, [jobs])

    return (
        <div>
            <h2>Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;