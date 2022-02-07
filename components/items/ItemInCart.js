import React from 'react'

function ItemInCart({item}) {

    return (
        <div className='itemInCart'>
            <p>{item.name}</p>
            <button>X</button>  <button>-</button>  <button>+</button>
        </div>
    )

}


export default ItemInCart;