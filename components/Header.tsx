import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";
import logoCasal from '../img/casal_logo.png'

const navigationRoutes = ["home", "about"];

export default function Header () {
  const router = useRouter();

  const navigation = navigationRoutes.map((singleRoute) => {
    return (
      <NavigationLink
        key={singleRoute}
        href={`/${singleRoute}`}
        text={singleRoute === "home" ? "Home" : "A Empresa"}
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
        className={`${isActive && "nav-item-active"} nav-item ml-4`}>
          {text}
        </a>
    </Link>
  )
}
