import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
    };

    const onClose = () => {
        setModalOpen(false);
    }

    return (
        <div className='relative'>
            <Button primary onClick={handleClick}>Get Your Modal</Button>
            {isModalOpen && <Modal onClose={onClose} />}
        </div>
    )
};

export default ModalPage;