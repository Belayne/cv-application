import "./work.css";
import { useState } from "react";
import TextBox from "./TextBox";
import EditButton from "./EditButton";

const jobElements = [
    {
        label: "Company Name",
        type: "text",
        id: "company",
        class: "company"
    },
    {
        label: "Position Title",
        type: "text",
        id: "posTitle",
        class: "position"
    },
    {
        label: "Start Date",
        type: "date",
        id: "startDate",
        class: "startdate"
    },
    {
        label: "End Date",
        type: "date",
        id: "endDate",
        class: "enddate"
    },
    {
        label: "Location",
        type: "text",
        id: "jobLocation",
        class: "location"
    }
]

const initialJobState = (id) => [jobElements.reduce((acc, curr) => {
    acc[curr.id + "-0"] = "";
    return acc;
}, {id: id})];
console.log(initialJobState)

function Jobs({editing, jobs, handleChange, removeJob}) {

    return (
        <div className="jobList">
        {jobs.map(job => 
            <div className="job" key={job.id}>
                {jobElements.map(element => {
                    return <TextBox key={element.id + "-" + job.id + "key"} id={element.id + "-" + job.id} label={element.label} type={element.type} editing={editing} onChange ={e => {handleChange(e, job.id)}} value = {job[element.id+ "-" + job.id]} className = {element.class}/>
                }
                )}
                {editing && <button className="btn-primary btn-delete" onClick={() => removeJob(job.id)}>Delete</button>}
                {!editing && <hr />}
            </div>
        )}
        </div>
    )
}

export default function WorkSection() {
    const [editing, setEditing] = useState(true);
    const [jobs, setJobs] = useState(initialJobState(0))

    function handleClick() {
        setEditing(!editing);
        setJobs(jobs.map(job => {
            job[`endDate-${job.id}`] = (job[`startDate-${job.id}`] && !job[`endDate-${job.id}`])? "present": "";
            return job
        }))
    }

    function handleChange(e, id) {
        const changedKey = e.target.id;
        const newJobs = jobs.map(job => {
            if(job.id === id) {
                let newJob = {...job};
                newJob[changedKey] = e.target.value;
                return newJob;
            }
            else return job;
        })
        setJobs(newJobs);
    }

    function addJob() {
        const newId = jobs.length > 0? jobs[jobs.length - 1].id + 1: 0;
        setJobs(jobs.concat(initialJobState(newId)));
    }

    function removeJob(id) {
        setJobs(jobs.filter(job => job.id != id));
    }

    return (
        <section className="work">
            <header>
                <h3>WORK EXPERIENCE</h3>
                <EditButton onClick={handleClick} editing={editing}/>
            </header>
            <hr />
            <Jobs editing = {editing} jobs = {jobs} handleChange={handleChange} removeJob={removeJob}/>
            {editing && <button className="btn-primary" onClick={addJob}>Add job</button>}
        </section>
    )
}