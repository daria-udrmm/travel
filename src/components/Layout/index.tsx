import { PropsWithChildren } from 'react'
import Header from '../Header/index'

const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <div className="bg-white">
                <Header />
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-6'>
                {props.children}
            </div>
        </>
    )
}

export default Layout;