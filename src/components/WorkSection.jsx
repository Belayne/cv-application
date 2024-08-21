import "./work.css";
import { useState } from "react";
import TextBox from "./TextBox";
import EditButton from "./EditButton";

const jobElements = [
    {
        label: "Company Name",
        type: "text",
        id: "company"
    },
    {
        label: "Position Title",
        type: "text",
        id: "posTitle"
    },
    {
        label: "Start Date",
        type: "date",
        id: "startDate"
    },
    {
        label: "End Date",
        type: "date",
        id: "endDate"
    },
    {
        label: "Location",
        type: "text",
        id: "jobLocation"
    }
]

const initialJobState = [jobElements.reduce((acc, curr) => {
    acc[curr.id + "-0"] = "";
    return acc;
}, {id: 0})];
console.log(initialJobState)

function Job({editing, jobs, handleChange}) {

    return (
        <>
        {jobs.map(job => 
            <div className="job" key={job.id}>
                {jobElements.map(element => {
                    return <TextBox key={element.id + "-" + job.id + "key"} id={element.id + "-" + job.id} label={element.label} type={element.type} editing={editing} onChange ={e => {handleChange(e, job.id)}} value = {job[element.id+ "-" + job.id]}/>
                }
                )}
            </div>
        )}
        </>
    )
}

export default function WorkSection() {
    const [editing, setEditing] = useState(true);
    const [jobs, setJobs] = useState(initialJobState)

    //console.log(jobs);

    function handleClick() {
        setEditing(!editing);
    }

    //console.log(jobs)

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

    return (
        <section className="work">
            <header>
                <h3>WORK EXPERIENCE</h3>
                <EditButton onClick={handleClick} editing={editing}/>
            </header>
            <hr />
            <Job editing = {editing} jobs = {jobs} handleChange={handleChange}/>
            {editing && <button className="btn-primary">Add job</button>}
        </section>
    )
}