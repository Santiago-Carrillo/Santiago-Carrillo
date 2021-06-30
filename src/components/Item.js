import React from 'react';

function Item({ id, title, price, pictureUrl }) {
   
    return(
        <div>
            <img src={pictureUrl} />
            <div>
                <span>{id}</span>
                <span>{title}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default Item;