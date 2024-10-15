import React, {useState}  from "react";

const initialState = {
    name: ''
}

const FormSat = (props) => {
    const [sat, setSat] = useState(initialState)

    const handleSatChange = e => setSat({
        ...sat,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = event => {
        props.addSatellites(sat);
        event.preventDefault();
        setSat(initialState)
    }




    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" name="name" value={sat.name} onChange={handleSatChange}></input>
            </div>
            <input type="submit"/>
        </form>
    );
}

export default FormSat;