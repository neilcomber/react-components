import Accordion from '../components/Accordion';

function AccordianPage() {
    const items = [
        {
            id: '12345',
            label: 'react project', 
            content: 'this is one!this is one! this is one! this is one! this is one! this is one! '
        }, 
        {
            id: '12323235',
            label: 'javascript project', 
            content: 'this is one!this is one! this is one! this is one! this is one! this is one! '
        },
        {
            id: '124335',
            label: 'css project', 
            content: 'this is one!this is one! this is one! this is one! this is one! this is one! '
        }
    ]

    return <Accordion items={items} />
}

export default AccordianPage;