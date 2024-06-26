import "@/styles/globals.css";
import { Montserrat } from 'next/font/google'

import type { AppProps } from "next/app";

const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
