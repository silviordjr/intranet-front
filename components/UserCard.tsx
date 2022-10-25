import Image from "next/image";
import user from "../img/user.jpg"
import Link from "next/link";

export default function UserCard (props: any) {
    const displayLink = () => {
        return(
            <>
            <div className="w-fit flex flex-col justify-center items-center mt-8">
                <Link href="/usuarios" passHref><button className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400">Buscar Usuários</button></Link>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="w-64 h-fit shadow-xl flex flex-col justify-between py-4 px-2">
                <div className="flex flex-col items-center mt-4">
                    <div className="w-20 h-20 rounded-full">
                    <Image
                    src={user}
                    alt={`Foto de perfil do usuario ${props.user.name}`}
                    layout="fixed"
                    unoptimized={true}
                    height='80%'
                    width='80%'
                    className="rounded-full"
                    />
                    </div>
                    <div className="mt-2 flex flex-col items-center">
                    <p className="font-mono text-xs font-light">{props.user.email}</p>
                    <p className="font-sans text-base font-medium my-4">{props.user.name}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-start">
                    <p className="font-mono text-xs font-light"> <span className="font-bold">Matrícula:</span> {props.user.matricula}</p>
                    <p className="font-mono text-xs font-light"><span className="font-bold">Telefone:</span> {props.user.telefone}</p>
                </div>
                {props.path === '/' && displayLink()}
            </div>
        </>
    )
}