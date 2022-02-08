import '../styles/globals.css'
import signup from '../styles/form.css' 
import { CartProvider } from '../components/cart/CartContext'


function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
