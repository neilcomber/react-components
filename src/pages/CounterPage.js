import { useReducer } from 'react';
import Button from "../components/Button";
import Panel from '../components/Panel';

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        };
    }
    if (action.type === 'change-value-to-add') {
        return {
            ...state,
            valueToAdd: action.payload
        };
    };
    return state;
};

 
function CounterPage({ initialCount }) {

    // const [counter, setCounter] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });
   
    const increment = () => {
        dispatch({
            type: 'increment'
        });
    };

    const decrement = () => {
        // setCounter(counter - 1);
    };

    const handleChange = (evt) => {
        const value = parseInt(evt.target.value) || 0;

        dispatch({
            type: 'change-value-to-add',
            payload: value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // setCounter(counter + valueToAdd);
        // setValueToAdd(0);
    }
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                 <Button primary onClick={increment}>Increment Count</Button>
                <Button primary onClick={decrement}>Decrement Count</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}



export default CounterPage;