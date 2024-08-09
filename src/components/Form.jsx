import "./styles/form.css"
import TextInput from "./TextInput"
import { useState } from "react"

const PERSONAL_FORM = [
    {label: "Name", type: "text", id: "name"},
    {label: "Surname", type: "text" , id: "surname"},
    {label: "Date of birth", type: "date" , id: "birthdate"},
    {label: "Nationality", type: "text", id: "nationality"},
    {label: "Email", type: "email", id: "email"},
    {label: "Location", type: "text", id: "location"}
]

const EDUCATION_FORM = [
    {label: "School Name", type: "text", id: "schoolName"},
    {label: "Title of study", type: "text" , id: "titleStudy"},
    {label: "Start Date", type: "date" , id: "startDate"},
    {label: "End Date", type: "date", id: "endDate"},
    {label: "Skills Obtained", type: "text", id: "skills"},
]

const WORK_FORM = [
    {label: "Company Name", type: "text", id: "companyName"},
    {label: "Position Title", type: "text" , id: "positionTitle"},
    {label: "Start Date", type: "date" , id: "startDate"},
    {label: "End Date", type: "date", id: "endDate"},
    {label: "Description", type: "text", id: "description"},
]

const FORM_TYPES = {
    personal: PERSONAL_FORM,
    education: EDUCATION_FORM,
    work: WORK_FORM
}

const FORM_HEADER = {
    personal: "Personal Information",
    work: "Work Experience",
    education: "Education"
}

function Form({type, userData}) {                                                                                                                                                                                          
    const [editing, setEditing] = useState(true);
    
    function handleSubmit(e) {
        e.preventDefault();
        setEditing(!editing);
    }

    const headerText = FORM_HEADER[type];
    const currentForm = FORM_TYPES[type];

    return (
        <form action="" onSubmit={handleSubmit}>
            <header>
                <h2>{headerText}</h2>
            </header>
            <div className="inputList">
                {currentForm.map(entry => <TextInput key={entry.id} label={entry.label} id={entry.id} type={entry.type} editing={editing}/>)}
            </div>
            <button>{editing? "Submit": "Edit"}</button>
        </form>
    )
}

export default Form