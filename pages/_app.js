import '../styles/globals.css'
import { AppProvider } from '../appState/appState'


function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
        <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
