import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height:'530px'}}>
            {props.children }
        </div>
    );
};

export default Scroll;


// CSS: overflow-y
// jsx: overflowY
