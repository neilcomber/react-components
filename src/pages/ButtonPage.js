import Button from '../components/Button';
import { HiBuildingLibrary, HiCloudArrowDown, HiGiftTop } from "react-icons/hi2";

function ButtonPage() {
    
    const handleClick = () => {
    }
    return <div>
        <div>
            <Button primary rounded className="mb-5" onClick={handleClick}>
                <HiBuildingLibrary />
                Buy Now
            </Button>
        </div>
        <div>
            <Button secondary outline onMouseEnter={handleClick}>
                <HiCloudArrowDown />
                Hide Adds</Button>
        </div>
        <div>
            <Button success>
                <HiGiftTop />
                third</Button>
        </div>
        <div>
        <Button warning>fourth</Button>
        </div>
        <div>
        <Button danger rounded outline>fifth</Button>
        </div>
        
    </div>
}

export default ButtonPage;