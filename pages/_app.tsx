import '../assets/css/black-dashboard-react.min.css'
import '../assets/css/nucleo-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from 'next/app'
import AdminLayout from "../layouts/Admin/Admin"

import ThemeContextWrapper from "../components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "../components/BackgroundColorWrapper/BackgroundColorWrapper";
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <AdminLayout><Component {...pageProps} /></AdminLayout>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>)
}

export default MyApp
