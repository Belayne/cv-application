import "./styles/TextInput.css"
import { useState } from "react";

function TextInput({label, id, type, editing}) {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className="textInputDiv">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={input} onChange={handleChange} disabled = {!editing}/>
        </div>
    )   
}

export default TextInput;