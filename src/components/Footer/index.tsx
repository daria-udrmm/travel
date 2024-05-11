import Link from 'next/link';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer className="bg-violet-100 py-6 mt-20">
            <div className="w-full max-w-screen-2xl mx-auto px-12">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Logo />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TravelEver</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Link href="/tours" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Туры</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Отели</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Специальные предложения</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Вопросы и ответы</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Контакты</Link>
                    </ul>
                </div>
                <span className="mt-16 pt-5 block text-sm text-black sm:text-center">© 2024 TravelEver™ Все права защищены.</span>
            </div>
        </footer>
    )
}

export default Footer;