import Layout from '@/components/Layout/index'
import RegisterPage from '@/components/Register';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

const Reg = () => {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean>()
    useLayoutEffect(() => {
        const isAuth = Boolean(localStorage.getItem('isAuth'));
        setIsAuth(isAuth)

    }, [])

    if (isAuth) {
        router.push("/lk");
        return
    }
    return (
        <Layout>
            <RegisterPage />
        </Layout>)
}

export default Reg;