import './form-component.css';
import React, { useState } from 'react';
// import Button from '../button-component/customButton';
// import {Context as UtilContext } from '../context/util-context';

const FormComponent = () => {
    const [homeData, setHomeData] = useState('');
    const [missFlightData, setMissFlightData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(homeData);
        console.log(missFlightData);
    };

    return (
        <div className="container">
            <form className="form-bitchh" action="action_page.php">
                <label className="stay-home" htmlFor="stay-home">Util Value for Staying Home</label>
                <input 
                    className="stay-home"
                    id="stay-home"
                    placeholder="Utils for Staying Home"
                    type="number"
                    value={homeData}
                    onChange={(event) => setHomeData(event.target.value)}
                />
                <label className="miss-flight" htmlFor="miss-flight">Util Cost for Missing Flight</label>
                <input 
                    className="miss-flight"
                    id="miss-flight"
                    placeholder="Utils for Missing Flight"
                    type="number"
                    value={missFlightData}
                    onChange={(event) => setMissFlightData(event.target.value)}
                />
            </form>

            {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
            <input type="submit" value="Submit" onClick={handleSubmit}/>
            
        </div>
    )
}

export default FormComponent;