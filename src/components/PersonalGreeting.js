import React, { useState } from "react";
const PersonalGreeting = () => {
    const [name, setName] = useState("");
    const handleChange = (value) => {
        setName(value);
    }
    return (
        <>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" onChange={(e) => handleChange(e.target.value)} id="name"/>
            {name.length > 0 && <p>Hello {name}!</p>}
        </>
    )
}

export default PersonalGreeting;