import '../styles/globals.css'
// import signup from '../styles/form.css' 
import { CartProvider } from '../components/cart/CartContext'
import { AppProvider } from '../appState/appState'


function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <CartProvider>
          <Component {...pageProps} />
      </CartProvider>
    </AppProvider>
  )
}

export default MyApp
