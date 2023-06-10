import { useState } from 'react';

export default () => {
    const [input, setInput] = useState(0);

    const handleInput = (event) => {
        const { value } = event.target;
        setInput((prevData) => ({...prevData, value}));
        console.log(input);
    }

    return [handleInput, input];
}