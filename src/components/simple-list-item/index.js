import React from 'react';
import './_styles.scss';

//  item: {name: 'Nora', role: 'the cat'}
function SimpleListItem(props) {
    return (
        <li className="simple-list-item">
            {
                Object.keys(props.item).map((key) => {
                    // Object.keys(props.item) -> ['name', 'role']
                    return (
                        <p key={key}>
                            <span className="label">{key}:</span>
                            <span>{props.item[key]}</span>
                        </p>
                    )
                }) 
            }
        </li>
    )
}

export default SimpleListItem;