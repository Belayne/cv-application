import { useState } from "react";

function NameHeader({editing}) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const fullName = name + " " + surname;

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }
    
    if(editing)
        return (
            <>
                <div className="textbox">
                    <label htmlFor="name">NAME</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange}/>
                </div>
                <div className="textbox">
                    <label htmlFor="surname">SURNAME</label>
                    <input type="text" id="surname" value={surname} onChange={handleSurnameChange}/>
                </div>
            </>
        )
        else {
            return (
                    <h2>{fullName}</h2>
                )
        }
}

export default NameHeader;