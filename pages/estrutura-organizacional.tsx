import Head from "next/head";

export default function EstruturaOrganizacional () {
    return(
        <>
            <Head>
                <title>Intranet | Casal</title>
                <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="w-screen h-screen">
                <embed src="/Organograma.pdf" type="application/pdf" height='100%' width='100%' />
            </div>
        </>
    )
}