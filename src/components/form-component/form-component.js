import React, { useState } from 'react';

const FormComponent = () => {
    const[formData, setFormData] = useState({
        data: 0
    });

    const handleChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({...prevData, data: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label># Utils for Staying Home:</label>
                <input
                    data={formData.data}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit THA SHIIII</button>
        </form>
    )
}

export default FormComponent;