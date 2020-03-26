import React from 'react';
import './_styles.scss';

// Defining a component
// props = {text: 'foo', theme: 'orange'}
// function Badge(props) {
function Badge({text, theme='', size='m'}) {
    return(
        // 'badge orange' `somestring ${variable}`
        <div className={`badge ${theme} ${size}`}>
            {text}
        </div>
    )
}

export default Badge;