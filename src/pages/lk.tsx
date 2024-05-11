import Layout from '@/components/Layout/index'
import LK from '@/components/LK/index'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LKPage = () => {
    const router = useRouter();
    const [data, setData] = useState()
    const loadUserProfile = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
            const response = await fetch('/userProfile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to load user profile');
            }
            const data = await response.json();
            setData(data)
        } catch (error) {
            router.push('/')
        }
    };

    useEffect(() => {
        loadUserProfile()
    }, [])

    return (
        <Layout>
            {data && <LK data={data} />}
        </Layout>)
}

export default LKPage;