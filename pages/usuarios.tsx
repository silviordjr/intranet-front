import Head from "next/head";
import Image from "next/image";
import lupa from "../img/lupa.png"
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from "../components/UserCard";
import { useRouter } from "next/dist/client/router";

export default function Usuarios () {
    const router = useRouter();
    
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
            <UserCard key={usuario.matricula} user={usuario} path={router.pathname} />
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