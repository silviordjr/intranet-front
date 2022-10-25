import Head from "next/head";
import useProtectedPage from './../hooks/useProtectedPage';

export default function Contato () {
    useProtectedPage()
    
    return (
        <>
            <Head>
                <title>Intranet | Casal</title>
                <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}