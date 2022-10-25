import Head from "next/head";
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Image from "next/image";
import lupa from "../img/lupa.png"
import drive from "../img/drive.png"
import Loading from "../components/Loading";
import useProtectedPage from './../hooks/useProtectedPage';

export default function Acervo () {
    useProtectedPage()
    
    const [googleFiles, setGoogleFiles] = useState<any[]>([]);
    const [previousFolders,setPreviousFolders] = useState<any[]>([{id: "1ppeC8JmV0WrVB5r2AvUtcijVGCNqQxXn", name: "Acervo"}]);
    const [searchName, setSearchName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const mounted = useRef(false);

    const getGoogleFiles = async (folder: string) => {
        setIsLoading(true)

        let folders = await fetch(`http://localhost:3333/${folder}`)
        let jsonFolders = await folders.json()

        setGoogleFiles(jsonFolders)

        setIsLoading(false)
    }

    const navigateIntoFolders = async (folderId: string, folderName: string) => {
        await getGoogleFiles(folderId)
    
        const previousFoldersCopy = [...previousFolders]
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

        setIsLoading(true)
        
        let folders = await fetch(`http://localhost:3333?_fileName=${searchName}`)
        const foldersJson = await folders.json()
        
        setGoogleFiles(foldersJson)
        setIsLoading(false)
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
                    <div className="min-w-fit">
                    <Image
                        src={`${file.iconLink}`}
                        alt={`${file.mimeType} icon`}
                        layout="fixed"
                        unoptimized={true}
                        height='15%'
                        width='15%'
                        className=""
                    />
                    </div>
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

    const renderPreviousFolder = previousFolders.map((folder, index) => {
        if (index === 0){
            return (
                <>
                    <div key={folder.name} className="flex flex-wrap  mt-4 px-4 py-1 bg-gray-200 rounded-full cursor-pointer font-mono text-xs font-bold" onClick={() => navigateIntoFolders(folder.id, folder.name)}>
                        {folder.name}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div key={folder.name} className="flex flex-wrap items-center justify-center  mt-4 font-mono text-xs font-bold">
                    ⮞ <p className="ml-2 px-4 py-1 bg-gray-200 rounded-full cursor-pointer" onClick={() => navigateIntoFolders(folder.id, folder.name)}>{folder.name}</p>
                    </div>
                </>
            )
        }
        
    })
    return (
        <>
            <Head>
                <title>Intranet | Casal</title>
                <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="px-4 lg:px-0 max-w-screen-xl mx-auto my-10 flex flex-col min-h-screen xl:w-1/3">
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
                    {isLoading ?
                    <Loading />
                    :
                    (<>
                    <div className="flex items-center justify-start flex-wrap gap-x-2">
                        {previousFolders && renderPreviousFolder}
                    </div>
                    <div className="flex justify-between items-end w-full">
                    <div className="flex flex-col mt-4">
                    {googleFiles && renderGoogleFiles}
                    </div>
                    <a href={`https://drive.google.com/drive/folders/${previousFolders[previousFolders.length - 1].id}`} target="_blank" rel="noreferrer">
                    <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer min-w-max">
                    <Image
                        src={drive}
                        alt={`Drive icon`}
                        layout="fixed"
                        unoptimized={true}
                        height='60%'
                        width='60%'
                        className=""
                    />
                    <p className="font-mono text-xs font-light">Visualizar no drive</p>
                    </div>
                    </a>
                    </div>
                    </>)}
                </div>
            </main>
        </>
    )
}