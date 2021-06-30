import react from 'react';
import Item from './Item';

function ItemList({item}) {
    return (
        <div>
            <Item {...item}/>
        </div>
    )
}

export default ItemList;