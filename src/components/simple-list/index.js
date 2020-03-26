import React from 'react';
import './_styles.scss';
import SimpleListItem from '../simple-list-item';

{/* <SimpleList list={
    [
        {name: 'Nora', role: 'the cat'},
        {name: 'Tom', role: 'another cat'},
    ]
} /> */}

function SimpleList(props) { // props { list: [{name: 'Nora', role: 'the cat'}] }
    console.log(props);
    return (
        <section>
            <h2>{props.title} {props.list.length}</h2>

            <ul className="simple-list">
                {
                    props.list.map((item, index) => {
                        return (
                            <SimpleListItem key={index} item={item} />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default SimpleList;