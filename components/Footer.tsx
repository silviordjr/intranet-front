import Image from "next/image";
import logoCasal from '../img/casal_logo.png'
import Link from 'next/link';

export default function Footer () {
    return (
        <>
        <footer className="w-full bg-gray-300 h-fit xl:h-60">
            <div className="xl:grid xl:grid-cols-3 flex flex-col justify-center items-center gap-4 max-w-screen-xl mx-auto h-fit px-4 lg:px-0 py-4">
                <div className="flex flex-col items-center justify-around">
                    <div>
                        <Image
                            src={logoCasal}
                            alt={'Logo Casal'}
                            layout="fixed"
                            unoptimized={true}
                            height='120%'
                            width='280%'
                            className=""
                        />
                    </div>
                    <div className="font-mono text-xs font-light text-center mt-4 xl:mt-0 text-blue-900">
                    ©{new Date().getFullYear()}Getin/Casal
                    </div>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-around">
                    <div className="font-sans text-base font-medium my-4">
                        Documento Corporativos
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-8 font-mono text-xs font-light text-center">
                        <p className="hover:text-green-600 cursor-pointer">Código de Conduta e Integridade</p>
                        <p className="hover:text-green-600 cursor-pointer">Estatuto Social</p>
                        <Link href='/estrutura-organizacional' passHref><p className="hover:text-green-600 cursor-pointer">Estrutura Organizacional</p></Link>
                        <p className="hover:text-green-600 cursor-pointer">Manual de Organização</p>
                        <p className="hover:text-green-600 cursor-pointer">Mapa Estratégico</p>
                        <p className="hover:text-green-600 cursor-pointer">Regimento Interno</p>
                        <p className="hover:text-green-600 cursor-pointer">Regulamento de Serviço</p>
                        <p className="hover:text-green-600 cursor-pointer">Regulamento Interno de Licitações, Contratos e Convênios</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}