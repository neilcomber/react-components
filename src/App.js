import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    return (
        <div>
            <Link to="/accordian">Go to accordian</Link>
            <Link to="/dropdown">Go to dropdown</Link>
            <div>
                <Route path='accordian'>
                    <AccordionPage />
                </Route>
                <Route path='/dropdown'>
                    <DropdownPage />
                </Route>
            </div>
        </div>
    );
}

export default App;