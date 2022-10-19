import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import PostCard from "../components/PostCard";
import { PostsResponse } from "./api/posts";
import Image from "next/image";
import user from "../img/user.jpg"
import snis from '../img/casal-snis.png'
import certificado from '../img/certificate.png'
import registroHomeOffice from '../img/registro-home-office.png'
import consultaRegistro from '../img/consultar-registro.png'
import contracheque from '../img/CONTRACHEQUE.png'
import gesan1 from '../img/GSAN.png'
import gesan2 from '../img/GSAN-base-png.png'
import pentaho from '../img/g4689.png'
import googleWorkspace from '../img/Google-Workspace.jpg'
import situacao from '../img/logo-sala-de-situação-modificada.png'
import redmine from '../img/redmine-casal3.png'
import sei from '../img/sei-icone.png'
import sigmetro from '../img/sigmetro.png'
import leitura from '../img/sla_original1.png'
import CalendarCard from "../components/CalendarCard";
import casal from "../img/casal_favicon.png"
import lupa from "../img/lupa.png"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const getPosts = async (offset: number = 0, limit: number = 4) => {
  const url = new URL(`/api/posts?offset=${offset}&limit=${limit}`, baseURL).toString()
  const response = await fetch(url)
  return await response.json() as PostsResponse
}


export const getStaticProps: GetStaticProps = async () => {
  const postsResponse = await getPosts()
  return {
    props: { postsResponse },
    revalidate: 30,
  }
}

const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
  postsResponse,
}: {
  postsResponse: PostsResponse
}) => {
  const [posts, setPosts] = useState(postsResponse.posts)
  const [hasMore, setHasMore] = useState(postsResponse.hasMore)
  const [isLoading, setIsLoading] = useState(false)
  const [responsiveUserDisplay, setResponsiveUserDisplay] = useState(false);
  const [responsiveLinksDisplay, setResponsiveLinksDisplay] = useState(false);

  const fetchMorePosts = async () => {
    setIsLoading(true)
    const postsResponse = await getPosts(posts.length)
    setPosts([
      ...posts,
      ...postsResponse.posts,
    ])
    setHasMore(postsResponse.hasMore)
    setIsLoading(false)
  }

  const mainContainerClassName = (): string => {
    if (responsiveUserDisplay){
      return ('flex flex-col justify-start items-center')
    } else if (responsiveLinksDisplay){
      return ('flex flex-col-reverse justify-start items-center')
    } else {
      return ('flex justify-center xl:justify-between items-start')
    }
  }

  const userContainerClassName = (): string => {
    if (responsiveUserDisplay) {
      return ("w-64 h-96 shadow-xl flex flex-col justify-between py-4 px-2")
    } else {
      return ("w-64 h-96 shadow-xl hidden xl:flex flex-col justify-between py-4 px-2")
    }
  }

  const calendarContainerClassName = (): string => {
    if (responsiveUserDisplay) {
      return ("w-64 h-fit shadow-xl flex flex-col justify-between py-8 px-2 mb-8")
    } else {
      return ("w-64 h-fit shadow-xl hidden xl:flex flex-col justify-between py-8 px-2")
    }
  }

  const linksContainerClassName = (): string => {
    if (responsiveLinksDisplay) {
      return ("w-64 h-fit shadow-xl flex flex-col items-center px-4 py-8 mb-8")
    } else {
      return ("w-64 h-fit shadow-xl hidden xl:flex flex-col items-center px-4 py-8")
    }
  }

  const showUserInfo = () => {
    setResponsiveLinksDisplay(false);
    setResponsiveUserDisplay(!responsiveUserDisplay)
  }

  const showLinksInfo = () => {
    setResponsiveUserDisplay(false);
    setResponsiveLinksDisplay(!responsiveLinksDisplay);
  }

  return (
    <>
      <Head>
        <title>Intranet | Casal</title>
        <meta name="description" content="Intranet da Companhia de Saneamento de Alagoas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 lg:px-0 max-w-screen-xl mx-auto my-10 flex flex-col" id="home-page">

        <div className="flex flex-col justify-between items-center">
        <div className="xl:hidden flex justify-between items-center w-full mb-8">
          <div className="shadow-xl rounded-full w-36 h-24 flex flex-col justify-center items-center px-2" onClick={showUserInfo}>
            <Image
                src={user}
                alt={'Foto de perfil do usuario'}
                layout="fixed"
                unoptimized={true}
                height='30%'
                width='30%'
                className="rounded-full"
              />
              <p className="font-mono text-xs font-light text-center mt-1">Mostrar Informações do Usuário</p>
          </div>
          <div className="shadow-xl rounded-full w-36 h-24 flex flex-col justify-center items-center px-2" onClick={showLinksInfo}>
            <Image
                src={casal}
                alt={'Logo Casal'}
                layout="fixed"
                unoptimized={true}
                height='30%'
                width='30%'
                className="rounded-full"
              />
              <p className="font-mono text-xs font-light text-center mt-1">Mostrar Links Uteis</p>
          </div>
        </div>
        <h1 className="font-sans text-3xl mb-12 font-thin w-full text-center">
          Bem-Vindo à <Link href="/" passHref><a className="font-semibold">nova intranet</a></Link> da Casal.
        </h1>
        </div>

        <div className={mainContainerClassName()}>
        <div>
        <div className={userContainerClassName()}>
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
              <p className="font-mono text-xs font-light">usuario.intranet@casal.al.gov.br</p>
              <p className="font-sans text-base font-medium mt-1">Usuário da Intranet da Silva</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="font-mono text-xs font-light"> <span className="font-bold">Matrícula:</span> 06656</p>
            <p className="font-mono text-xs font-light"><span className="font-bold">Telefone:</span> (82)99542-5643</p>
          </div>
          <div className="w-fit flex flex-col justify-center items-center">
          <Link href="/usuarios" passHref><button className="px-2 py-1 rounded bg-gray-300">Buscar Usuários</button></Link>
          </div>
        </div>

        <div className={calendarContainerClassName()}>
          <CalendarCard />
        </div>

        </div>

        <section className="mb-10 flex flex-col space-y-10 max-w-screen-sm">
          <div className="flex justify-around items-center">
            <div>
            <button className="px-2 py-1 font-mono text-xs font-light rounded-full bg-gray-300 mr-4">Ver Tudo</button>
            <button className="px-2 py-1 font-mono text-xs font-light rounded-full bg-gray-300">Publicações da ASCOM</button>
            </div>
            <div className="rounded-full bg-gray-300 w-56 px-2 py-1 flex justify-between  items-center">
            <Image
                src={lupa}
                alt={'Icone Lupa'}
                layout="fixed"
                unoptimized={true}
                height='15%'
                width='15%'
                className=""
              />
              <input type="text" placeholder="Busque uma postagem..." className="font-mono text-xs font-light w-44 bg-gray-300" />
            </div>
          </div>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </section>

        <div className={linksContainerClassName()}>
          <h3 className="font-sans text-base font-medium mt-1 mb-8">Links Uteis</h3>
        <div className="flex justify-around items-start flex-wrap gap-y-12">
        <Image
        src={consultaRegistro}
        alt={'Logo consulta registro'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={registroHomeOffice}
        alt={'Logo home office'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={googleWorkspace}
        alt={'Logo google workspace'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={gesan1}
        alt={'Logo gesan'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={gesan2}
        alt={'Logo gesan'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={redmine}
        alt={'Logo redmine'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={pentaho}
        alt={'Logo pentaho'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={leitura}
        alt={'Logo sistema leitura de agua'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={certificado}
        alt={'Logo sistema certificado digital'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={sigmetro}
        alt={'Logo sigmetro'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={contracheque}
        alt={'Logo contracheque'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={situacao}
        alt={'Logo sala de situação'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={snis}
        alt={'Logo snis'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
      <Image
        src={sei}
        alt={'Logo sei'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='75%'
        className=""
      />
        </div>
        </div>

        </div>

        {hasMore && (
          <div className="mb-10 text-center">
            <Button
              onClick={fetchMorePosts}
              disabled={isLoading}
            >Carregar mais</Button>
          </div>
        )}
      </main>
    </>
  )
}

export default Home;
