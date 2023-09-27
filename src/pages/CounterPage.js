import { useState } from 'react';
import Button from "../components/Button";
import Panel from '../components/Panel';

 
function CounterPage({ initialCount }) {

    const [counter, setCounter] = useState(initialCount)

    const [valueToAdd, setValueToAdd] = useState(0);
   
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const handleChange = (evt) => {
        const value = parseInt(evt.target.value) || 0;

        setValueToAdd(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setCounter(counter + valueToAdd);
        setValueToAdd(0);
    }
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {counter}</h1>
            <div className="flex flex-row">
                 <Button primary onClick={increment}>Increment Count</Button>
                <Button primary onClick={decrement}>Decrement Count</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}



export default CounterPage;