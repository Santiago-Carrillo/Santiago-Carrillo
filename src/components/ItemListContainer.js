import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const referensData = [
    {
        item: { 
            id: '1',
            title: 'producto1',
            price: '500$',
            pictureUrl: 'https://i.blogs.es/6c994c/2010_09_30_monitores01/450_1000.jpg'
        }
    },
    {
        item: { 
            id: '2',
            title: 'producto2',
            price: '800$',
            pictureUrl: 'https://i.blogs.es/6c994c/2010_09_30_monitores01/450_1000.jpg'
        }
    },
    {
        item: { 
            id: '3',
            title: 'producto3',
            price: '1000$',
            pictureUrl: 'https://i.blogs.es/6c994c/2010_09_30_monitores01/450_1000.jpg'
        }
    }
]

function ItemListContainer(props) {

    const [referens, setReferences] = useState(referensData);

    const addNewItem = () => {
        const newReference =  {
            item: { 
                id: '1',
                title: 'producto1',
                price: '500$',
                pictureUrl: 'https://i.blogs.es/6c994c/2010_09_30_monitores01/450_1000.jpg'
            }
        }
        setReferences([...referens, newReference])
    }

    // useEffect = (()  => {
    //     new Promise((resolve, reject) => {
    //         setTimeout(resolve(referensData), 3000)
    //     }).then(
    //         (referenceResolve) => {
    //             setReferences(referenceResolve)
    //         }
    //     ) 
    
    // }, [])
    const promise = () => {
        return(
            new Promise((resolve, reject) => {
                setTimeout(resolve(referensData), 3000)
            }).then(
                (referenceResolve) => {
                    setReferences(referenceResolve)
                }
            ) 
        
        )
    }

    return ( 
        <div> 
            <div>
                <h3>Hola, {props.greeting}</h3>
                <ItemCount stock={3} initial={0} onAdd={() => console.log('agregado')}/>
            </div>
            <div>
                {referens.map((item, key) =>
                <ItemList {...item} />)}
                <button onClick={addNewItem}>Agregar Referencia</button>
            </div>
        </div>
    )  
}

export default ItemListContainer;