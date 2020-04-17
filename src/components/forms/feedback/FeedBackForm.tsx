import React, { useState } from 'react';

const FeedBackFrom = (props: any) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const inputChange = (setter: any) => (event: { target: { value: any; }; }) => {
        setter(event.target.value)
    }
    return (
        <form>
            <input type="text" name="firstName" value={firstName} onChange={inputChange(setFirstName)} placeholder="your first name" />
            <input type="text" name="lastName" value={lastName} onChange={inputChange(setLastName)} placeholder="your last name" />
        </form>
    )
}

export default FeedBackFrom;