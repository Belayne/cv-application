import "./textBox.css"
import { useState } from "react"

function TextBox({label, type, id, editing, value, onChange, className}) {

    if(editing) {
        return (
            <div className={"textbox" + " " + className}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} onChange={onChange} value={value} />
            </div>
        )
    }
    else return (
        <div className={"textbox notEditing" + " " + className}>
            <p className="labelText">{label}: </p>
            <p>{value}</p>
        </div>
    )
}

export default TextBox;