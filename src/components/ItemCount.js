import React, {useState} from 'react';

const ItemCount = ({stock: initialStock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(initialStock)
    
    const addCount = () => {
        if(stock >= 1) {
            setCount(count + 1)
            setStock(stock - 1)
            // alert("stock: " + stock)
        }    
    }
    const substractCount = () => {
        if(count > 0) {
        setCount(count - 1)
        setStock(stock + 1)
        // alert("stock: " + stock)
        }
    }

    return (
        <div>
            <button onClick={substractCount}>-</button>
            {count}
            <button onClick={addCount}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;