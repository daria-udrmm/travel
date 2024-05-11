import { PropsWithChildren } from 'react'
import Footer from '../Footer';
import Header from '../Header/index'

const Layout = (props: PropsWithChildren & {
    full?: boolean;
}) => {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <div className="bg-white">
                <Header />
            </div>
            <div className={`${props.full ? '' : 'max-w-7xl px-5'} mx-auto w-full pb-6`}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;