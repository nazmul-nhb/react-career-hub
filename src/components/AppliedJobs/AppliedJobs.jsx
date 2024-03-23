import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [applied, setApplied] = useState([]);

    useEffect(() => {
        const storedJobIDs = getStoredJobApplication([]);
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIDs.includes(job.id));
            setApplied(jobsApplied); // Why? jobsApplied is already an array
            console.log(jobsApplied);
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

    console.log(applied);

    return (
        <div>
            <h2>Jobs I Applied: {applied.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
            <div className="">
                {
                    applied.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;