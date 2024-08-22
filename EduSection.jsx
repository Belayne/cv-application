import { useState } from "react";
import TextBox from "./src/components/TextBox";
import EditButton from "./src/components/EditButton";


const eduElements = [
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


function Edus({editing, edus, handleChange, removeedu}) {

    return (
        <div className="eduList">
        {edus.map(edu => 
            <div className="edu" key={edu.id}>
                {eduElements.map(element => {
                    return <TextBox key={element.id + "-" + edu.id + "key"} id={element.id + "-" + edu.id} label={element.label} type={element.type} editing={editing} onChange ={e => {handleChange(e, edu.id)}} value = {edu[element.id+ "-" + edu.id]} className = {element.class}/>
                }
                )}
                {editing && <button className="btn-primary btn-delete" onClick={() => removeedu(edu.id)}>Delete</button>}
                {!editing && <hr />}
            </div>
        )}
        </div>
    )
}

const initialeduState = (id) => [eduElements.reduce((acc, curr) => {
    acc[curr.id + "-0"] = "";
    return acc;
}, {id: id})];

export default function EduSection() {
    const [editing, setEditing] = useState(true);
    const [edus, setEdus] = useState(initialeduState(0))

    function handleClick() {
        setEditing(!editing);
        setEdus(edus.map(edu => {
            edu[`endDate-${edu.id}`] = (edu[`startDate-${edu.id}`] && !edu[`endDate-${edu.id}`])? "present": "";
            return edu
        }))
    }

    function handleChange(e, id) {
        const changedKey = e.target.id;
        const newedus = edus.map(edu => {
            if(edu.id === id) {
                let newedu = {...edu};
                newedu[changedKey] = e.target.value;
                return newedu;
            }
            else return edu;
        })
        setEdus(newedus);
    }

    function addedu() {
        const newId = edus.length > 0? edus[edus.length - 1].id + 1: 0;
        setEdus(edus.concat(initialeduState(newId)));
    }

    function removeedu(id) {
        setEdus(edus.filter(edu => edu.id != id));
    }

    return (
        <section className="education">
            <header>
                <h3>EDUCATION</h3>
                <EditButton onClick={handleClick} editing={editing}/>
            </header>
            <hr />
            <Edus editing = {editing} edus = {edus} handleChange={handleChange} removeedu={removeedu}/>
            {editing && <button className="btn-primary" onClick={addedu}>Add education</button>}
        </section>
    )
}