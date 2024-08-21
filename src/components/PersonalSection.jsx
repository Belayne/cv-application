import "./personal.css"
import TextBox from "./TextBox"
import { useState } from "react";
import NameHeader from "./NameHeader";
import EditButton from "./EditButton";

const infoElements = [
    {
        label: "Nationality",
        id: "nationality",
        type: "text"
    },
    {
        label: "Phone Number",
        id: "phone",
        type: "text"
    },
    {
        label: "Email",
        id: "email",
        type: "email"
    },
    {
        label: "Location",
        id: "location",
        type: "text"
    },
    {
        label: "Date of birth",
        id: "birthdate",
        type: "date"
    }
]

function PersonalSection() {
    const [editing, setEditing] = useState(true);
    const [info, setInfo] = useState({
        nationality: "",
        phone: "",
        email: "",
        location: "",
        birthdate: ""
    });


    function handleChange(e) {
        const changedKey = e.target.id;
        const newInfo = {...info};
        newInfo[changedKey] = e.target.value;
        setInfo(newInfo);
    }
    

    function handleClick() {
        setEditing(!editing);
    }

    return (
        <section className="personal">
            <header>
                <NameHeader editing={editing}/>
                <EditButton onClick={handleClick} editing={editing}/>
            </header>
            <hr />
            <div className="infoList">
                {infoElements.map(element => <TextBox key={element.id} id={element.id} label={element.label} type={element.type} editing={editing} onChange ={handleChange} value = {info[element.id]}></TextBox>)}
            </div>
        </section>
    )
}

export default PersonalSection;