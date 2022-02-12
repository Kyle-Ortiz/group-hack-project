import React, { useContext } from 'react'
import { CartContext } from '../cart/CartContext';
import styles from '../../styles/Selection.module.css'
function ItemOnScreen({item}){

    const { addCartItem } = useContext(CartContext);

    return (
        <div className={styles.individualItemContainer} onClick={() => addCartItem(item)}>
            <div className={styles.individualItem} >
                
                    <img 
                        src={item.picture} 
                        width="75px" 
                        height="75px" 
                        style={{
                            objectFit:"fill",
                            border: "solid 1px green"
                        }}
                    />
                <p>{item.name}</p>
            </div>
        </div>
    )

}

export default ItemOnScreen;


{/* Comments: Options for 'object-fit' property for an image tag:
fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
none - The image is not resized
scale-down - the image is scaled down to the smallest version of none or contain */}