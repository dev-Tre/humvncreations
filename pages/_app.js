import "../styles/globals.css";
import localFont from "@next/font/local";
import Head from 'next/head'

import Layout from "../components/Layout";
import Transition from "../components/Transition";

const monitaSignature = localFont({
  src: "./MonitaSignaturePERSONALUSE-Regular.otf",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={monitaSignature.className}>
      <Head>
        <title>Humvn Creations</title>
        <meta name="description" content="Curated by Tyler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Transition> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </Transition> */}
    </main>
  );
}
