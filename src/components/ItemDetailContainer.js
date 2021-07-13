import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

const itemDetail = {
    item: {
        id: '1',
        title: 'producto1',
        price: '500$',
        pictureUrl: 'https://i.blogs.es/6c994c/2010_09_30_monitores01/450_1000.jpg'
    }
}

function itemDetailContainer() {

    const [referens, setReferences] = useState(itemDetail);

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

    const promise = () => {
        return(
            new Promise((resolve, reject) => {
                setTimeout(resolve(itemDetail), 3000)
            }).then(
                (referenceResolve) => {
                    setReferences(referenceResolve)
                }
            ) 
        
        )
    }

    return (
        <div>
            <ItemDetail {...referens.item} />
        </div>
    )
}

export default itemDetailContainer;