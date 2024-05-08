import Link from 'next/link';

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
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
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
                    <Link href="/auth" className="text-sm font-semibold leading-6 text-gray-900">Войти{" "}<span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;