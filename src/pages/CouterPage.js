import Button from "../components/Button";
import useCounter from "../hooks/use-counter";
 
function CounterPage({ count }) {
     const { counter, increment } = useCounter(count);
    
    return (<div><h1>Count is {counter}</h1>
        <Button primary onClick={increment}>Increment Count</Button>
    </div>);
}



export default CounterPage;