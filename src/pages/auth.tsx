import Layout from '@/components/Layout/index'
import Log from '@/components/Login';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

const Login = () => {
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
            <Log />
        </Layout>)
}

export default Login;