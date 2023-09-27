import { useState, useEffect } from 'react';

function useCounter(count) {

    const [counter, setCounter] = useState(count);

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    const increment = () => {
        setCounter(counter + 1);
    };

    return {
        counter, increment
    };
    
}

export default useCounter;