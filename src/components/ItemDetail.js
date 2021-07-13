import react from 'react';
import Item from './Item';

function ItemDetail({item}) {
    return (
        <div>
            <Item {...item}/>
        </div>
    )
}

export default ItemDetail;