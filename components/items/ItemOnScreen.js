import React from 'react'

function ItemOnScreen({item}){

    return(
        <div className='"itemOnScreen'>
            <div>{item.picture}</div>
            <p>{item.name}</p>
        </div>
    )

}

export default ItemOnScreen;