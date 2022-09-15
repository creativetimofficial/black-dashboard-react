import '../assets/css/black-dashboard-react.min.css'
import '../assets/css/nucleo-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
