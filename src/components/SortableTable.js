import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { useState } from 'react';
import Table from "./Table";

function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {

        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }

        
    }
    
    
    const updatedConfig = config.map((column) => {
        if (column.sortValue) {
            return {
                ...column, header: () => {
                    return <th className="cursor-pointer hover:bg-gray-100" onClick={() => { handleClick(column.label) }}>
                        <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                            </div>
                    </th>
                }
            }
    
        }
        return column;
    });

    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        });
    };

    return (
            <Table {...props} data={sortedData} config={ updatedConfig } />
    );
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoChevronUp />
                <GoChevronDown />
            </div>
        )
    }

    if (sortOrder === null) {
        return (
            <div>
                 <GoChevronUp />
                <GoChevronDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return(
            <div>
                 <GoChevronUp />
            </div>)
    } else if (sortOrder === 'desc') {
        return (
            <div>
                 <GoChevronDown />
            </div>)
    }
}

export default SortableTable;