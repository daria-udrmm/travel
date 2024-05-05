import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Link href="/tours" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Туры</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Отели</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Специальные предложения</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Вопросы и ответы</Link>
                        <Link href="/hotels" className="text-violet-500 hover:underline me-4 md:me-6 hover:text-violet-700 duration-300">Контакты</Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Flowbite™. Все права защищены.</span>
            </div>
        </footer>
    )
}

export default Footer;