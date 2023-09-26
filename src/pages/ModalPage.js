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

    const actionBar = <div>
        <Button primary onClick={onClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={onClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept.
        </p>
        </Modal>

    return (
        <div className='relative'>
            <Button primary onClick={handleClick}>Get Your Modal</Button>
            {isModalOpen && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mauris vel neque accumsan pretium. Aliquam placerat consequat augue et ornare. Praesent ultricies euismod tellus, at pharetra odio cursus et. Etiam ut magna vel magna eleifend pellentesque in nec purus. Mauris venenatis sagittis maximus. Fusce cursus euismod urna, vel finibus massa pulvinar ut. In quis urna odio. Quisque pulvinar metus ac dui tempus molestie ac rhoncus lorem. Morbi at tempor urna. Nunc non tempor felis.r
            </p>
        
        </div>
    )
};

export default ModalPage;