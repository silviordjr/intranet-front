import Head from "next/head";
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Image from "next/image";
import lupa from "../img/lupa.png"
import drive from "../img/drive.png"

export default function Acervo () {
    const [googleFiles, setGoogleFiles] = useState<any[]>([]);
    const [previousFolders,setPreviousFolders] = useState<any[]>([{id: "1ppeC8JmV0WrVB5r2AvUtcijVGCNqQxXn", name: "Acervo"}]);
    const [searchName, setSearchName] = useState('')
    const mounted = useRef(false);

    const getGoogleFiles = async (folder: string) => {
        let folders = await fetch(`http://localhost:3333/${folder}`)
        let jsonFolders = await folders.json()

        setGoogleFiles(jsonFolders)
    }

    const navigateIntoFolders = async (folderId: string, folderName: string) => {
        await getGoogleFiles(folderId)
    
        const previousFoldersCopy = [...previousFolders]
        console.log(previousFoldersCopy)
        let indexInPreviousFolder = -1

        for (let i = 0; i < previousFoldersCopy.length; i++){
            console.log('oi')
            if (previousFoldersCopy[i].id === folderId){
                indexInPreviousFolder = i
            }
        }

        if (indexInPreviousFolder !== -1){
            previousFoldersCopy.splice(indexInPreviousFolder + 1, previousFoldersCopy.length - (indexInPreviousFolder + 1))
        } else {
            previousFoldersCopy.push({
                id: folderId,
                name: folderName
            })
        }

        setPreviousFolders(previousFoldersCopy)
    }

    const onChangeSearch = (event: any) => {
        setSearchName(event.target.value)
    }

    const searchFiles = async (e: any) => {
        e.preventDefault()

        let folders = await fetch(`http://localhost:3333?_fileName=${searchName}`)
        const foldersJson = await folders.json()
        
        setGoogleFiles(foldersJson)
    }

    useEffect(() => {
        if (!mounted.current){
            getGoogleFiles('')
            mounted.current = true
        }
    }, [])

    const renderGoogleFiles = googleFiles.map((file) => {
        return (
            <>
                <div key={file.id} className="flex items-center justify-start">
                    <Image
                        src={`${file.iconLink}`}
                        alt={`${file.mimeType} icon`}
                        layout="fixed"
                        unoptimized={true}
                        height='15%'
                        width='15%'
                        className=""
                    />
                    {file.mimeType === 'application/vnd.google-apps.folder' ?
                    <p key={file.id} className="font-mono text-xs font-light pt-1 my-2 cursor-pointer hover:text-green-600 ml-2" onClick={() => navigateIntoFolders(file.id, file.name)}>
                        {file.name}
                    </p>
                    :
                    <a href={`${file.webViewLink}`} target="_blank" rel="noreferrer">
                    <p key={file.id} className="font-mono text-xs font-light pt-1 my-2 cursor-pointer hover:text-green-600 ml-2" >
                        {file.name}
                    </p>
                    </a>
                    }
                </div>
            </>
        )
    })

    const renderPreviousFolder = previousFolders.map((folder) => {
        return (
            <>
                <div key={folder.name} className="flex flex-wrap mb-8 mt-4 px-4 py-1 bg-gray-200 rounded-full cursor-pointer" onClick={() => navigateIntoFolders(folder.id, folder.name)}>
                    {folder.name}
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
            <main className="px-4 lg:px-0 max-w-screen-xl mx-auto my-10 flex flex-col min-h-screen w-1/3">
                <div className="flex items-center justify-center">
                    <form onSubmit={searchFiles} className="rounded-full bg-gray-300 w-64 px-2 py-1 flex justify-between items-center">
                        <button className="m-0 p-0 w-fit h-fit flex items-center justify-center">
                            <Image
                                src={lupa}
                                alt={'Icone Lupa'}
                                layout="fixed"
                                unoptimized={true}
                                height='15%'
                                width='15%'
                                className=""
                            />
                        </button>
                        <input type="search" placeholder="Pesquise algum arquivo..." onInput={onChangeSearch} value={searchName} name='body' className="font-mono text-xs font-light w-52 bg-gray-300" />
                    </form>
                </div>
                <div className="shadow-xl py-4 px-4 rounded-xl flex flex-col items-start justify-start">
                    <div className="flex items-center justify-start flex-wrap gap-2">
                        {previousFolders && renderPreviousFolder}
                    </div>
                    <div className="flex justify-between items-end w-full">
                    <div className="flex flex-col">
                    {googleFiles && renderGoogleFiles}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <Image
                        src={drive}
                        alt={`Drive icon`}
                        layout="fixed"
                        unoptimized={true}
                        height='60%'
                        width='60%'
                        className=""
                    />
                    <p>Visualizar no drive</p>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}