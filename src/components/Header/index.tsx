import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../Logo';

const links = [
    {
        url: '/tours',
        label: 'Туры'
    },
    {
        url: '/hotels',
        label: 'Отели'
    },
    {
        url: '/',
        label: 'Направления'
    },
    {
        url: '/',
        label: 'Специальные предложения'
    }
]

const Header = () => {
    const [isAuth, setIsAuth] = useState<boolean>()
    const checkAuth = () => {
        setIsAuth(Boolean(localStorage.getItem("isAuth")))
    }

    useEffect(() => {
        checkAuth()
    }, [])

    console.log({ isAuth })
    return (
        <header className="bg-violet-100">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Logo />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TravelEver</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        links.map((elem, id) => (
                            <Link href={elem.url} className='px-4 py-1 text-sm font-semibold rounded-xl leading-6 text-white bg-violet-500 hover:bg-violet-700 active:bg-violet-700' key={id}>{elem.label}</Link>
                        ))
                    }
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isAuth ?
                        <Link href="/lk" className="text-sm font-semibold leading-6 text-gray-900">Личный кабинет</Link>
                        :
                        <Link href="/auth" className="text-sm font-semibold leading-6 text-gray-900">Войти{" "}<span aria-hidden="true">&rarr;</span></Link>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;