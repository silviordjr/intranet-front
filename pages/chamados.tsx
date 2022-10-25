import Head from "next/head";
import useProtectedPage from './../hooks/useProtectedPage';

export default function Chamados () {
    useProtectedPage()
    
    return (
        <>
            <Head>
                <title>Intranet | Casal</title>
                <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-around items-start min-h-screen px-4 lg:px-0 max-w-screen-xl mx-auto my-10">
                <div className="flex justify-between items-start flex-wrap gap-8 text-center font-mono text-lg font-light">
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p>Denúncia</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Superintendência de Desenvolvimento Operacional</p>
                        <p>SUDEO</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Gerência de Tecnologia da Informação</p>
                        <p>GETIN</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Gerência de Operações Comerciais e Recebíveis</p>
                        <p>GEROC</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Gerência de Suprimentos</p>
                        <p>GESUP</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Gerência de Serviços Auxiliares</p>
                        <p>GESEA</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Gerência de Patrimônio</p>
                        <p>GEPAT</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p className="text-sm">Recursos Humanos</p>
                        <p>RH</p>
                    </div>
                    <div className="w-80 h-40 shadow-xl rounded-full flex flex-col items-center justify-around py-4 px-8 cursor-pointer">
                        <p>Meus Chamados</p>
                    </div>
                </div>
            </main>
        </>
    )
}