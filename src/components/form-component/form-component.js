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
        <div>
            <form className="aaa">
                <label>ENTER THEM DIGITS </label>
                <input 
                    placeholder="BIATCHHH ENTER THAT HOMEADATA"
                    type="number"
                    value={homeData}
                    onChange={(event) => setHomeData(event.target.value)}
            />
            </form>
            <form className="bbb">
                <label>ENTER THOSE DIGITS AGAINNN</label>
                <input 
                    placeholder="YURR ENTER MF DATA"
                    type="number"
                    value={missFlightData}
                    onChange={(event) => setMissFlightData(event.target.value)}
            />
            </form>
            <button type="submit" onClick={handleSubmit}>SUBMIT THAT SHIII</button>
            
        </div>
    )
}

export default FormComponent;