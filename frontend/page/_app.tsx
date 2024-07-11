// frontend/pages/_app.tsx

import '../styles/global.css'; // Adjust the path based on your folder structure

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
