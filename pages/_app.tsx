import '../assets/css/black-dashboard-react.min.css'
import '../assets/css/nucleo-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from 'next/app'
import AdminLayout from "../layouts/Admin/Admin"
function MyApp({ Component, pageProps }: AppProps) {
  return <AdminLayout><Component {...pageProps} /></AdminLayout>
}

export default MyApp
