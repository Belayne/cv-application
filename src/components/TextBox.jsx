import "./textBox.css"
import { useState } from "react"

function TextBox({label, type, id, editing}) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }
    
    if(editing) {
        return (
            <div className="textbox">
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={value} onChange={handleChange}/>
            </div>
        )
    }
    else return (
        <div className="textbox notEditing">
            <p className="labelText">{label}: </p>
            <p>{value}</p>
        </div>
    )
}

export default TextBox;