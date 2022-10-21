import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";
import logoCasal from '../img/casal_logo.png'

const navigationRoutes = ["home", "about", "chamados", "acervo", "contato"];

export default function Header () {
  const router = useRouter();

  const navigation = navigationRoutes.map((singleRoute) => {
    let nameOnHeader = ''

    if (singleRoute === 'home') {
      nameOnHeader = "Página Inicial"
    }
    if (singleRoute === 'about') {
      nameOnHeader = "A Empresa"
    }
    if (singleRoute === 'chamados') {
      nameOnHeader = "Chamados"
    }

    if(singleRoute === 'acervo'){
      nameOnHeader = "Acervo"
    }

    if (singleRoute === 'contato') {
      nameOnHeader = 'Contato'
    }

    return (
      <NavigationLink
        key={singleRoute}
        href={`/${singleRoute}`}
        text={nameOnHeader}
        router={router}
      />
    )
  })

  return (
    <>
    <header className="w-full bg-gray-300 shadow-xl h-24">
      <div className='flex justify-between items-center max-w-screen-xl mx-auto h-24 px-4 lg:px-0'>
      <div className=''>
      <Image
        src={logoCasal}
        alt={'Logo Casal'}
        layout="fixed"
        unoptimized={true}
        height='55%'
        width='120%'
        className=""
      />
      </div>

      <nav className="nav-container">
        {navigation}
      </nav>
      </div>
    </header>
    </>
  )
}

function NavigationLink (props: any) {
  const {router, href, text} = props
  const isActive = router.asPath === (href === "/home" ? "/" : href);

  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a 
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav-item-active"} nav-item ml-8`}>
          {text}
        </a>
    </Link>
  )
}
