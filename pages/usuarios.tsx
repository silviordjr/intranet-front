import Head from "next/head";
import Image from "next/image";
import lupa from "../img/lupa.png"
import { useEffect } from 'react';
import { useState } from 'react';
import user from "../img/user.jpg"

export default function Usuarios () {
    const [usuarios, setUsuarios] = useState<any[]>([]);

    useEffect(() => {
        fetch('/data/usuario-mock.json')
        .then(res => res.json()).then(res => {
            setUsuarios(res)
        });
    }, [])

    const displayUserCards = usuarios.map((usuario) => {
        return (
            <>
            <div className="w-64 h-fit shadow-xl flex flex-col justify-between py-4 px-2">
                <div className="flex flex-col items-center mt-4">
                    <div className="w-20 h-20 rounded-full">
                    <Image
                    src={user}
                    alt={'Foto de perfil do usuario'}
                    layout="fixed"
                    unoptimized={true}
                    height='80%'
                    width='80%'
                    className="rounded-full"
                    />
                    </div>
                    <div className="mt-2 flex flex-col items-center">
                    <p className="font-mono text-xs font-light">{usuario.email}</p>
                    <p className="font-sans text-base font-medium my-4">{usuario.name}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-start">
                    <p className="font-mono text-xs font-light"> <span className="font-bold">Matrícula:</span> {usuario.matricula}</p>
                    <p className="font-mono text-xs font-light"><span className="font-bold">Telefone:</span> {usuario.telefone}</p>
                </div>
            </div>
            </>
        )
    })
    return (
        <>
        <Head>
            <title>Intranet | Casal</title>
            <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="px-4 lg:px-0 max-w-screen-xl mx-auto my-10 flex flex-col justify-center items-center">
            <div className="rounded-full bg-gray-300 w-56 px-2 py-1 flex justify-between  items-center mb-8">
                <Image
                    src={lupa}
                    alt={'Icone Lupa'}
                    layout="fixed"
                    unoptimized={true}
                    height='15%'
                    width='15%'
                    className=""
                />
                <input type="text" placeholder="Pesquise um usário..." className="font-mono text-xs font-light w-44 bg-gray-300" />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:flex-wrap xl:gap-4">
                {usuarios && displayUserCards}
            </div>
        </main>
        </>
    )
}