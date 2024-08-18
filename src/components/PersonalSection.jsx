import "./personal.css"
import TextBox from "./TextBox"
import { useState } from "react";
import NameHeader from "./NameHeader";

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
    }
]

function PersonalSection() {
    const [editing, setEditing] = useState(true);

    function handleClick() {
        setEditing(!editing);
    }

    return (
        <section className="personal">
            <header>
                <NameHeader editing={editing}/>
                <button className="btn-primary" onClick={handleClick}>{editing? "SUBMIT": "EDIT"}</button>
            </header>
            <hr />
            <div className="infoList">
                {infoElements.map(element => <TextBox key={element.id} id={element.id} label={element.label} type={element.type} editing={editing}></TextBox>)}
            </div>
        </section>
    )
}

export default PersonalSection;