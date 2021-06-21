import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    return (  
        <div>
            <h3>Hola, {props.greeting}</h3>
            <ItemCount stock={3} initial={1} onAdd={() => console.log('agregado')}/>
        </div>
    )  
}
  
export default ItemListContainer;