export default function ProceedToCheckout({styleFunction, onClickFunction, basketEmpty}){
    return(
        <button 
            className={styleFunction} 
            onClick={onClickFunction} 
            disabled={basketEmpty ? true : false} >
            Proceed to Checkout
        </button>
    )
}