import Layout from '@/components/Layout/index'
import LK from '@/components/LK/index'

const LKPage = () => {

    return (
        <Layout>
            <LK firstName={''} lastName={''} middleName={''} dateOfBirth={''} city={''} onSave={function (data: LKProps): void {
                throw new Error('Function not implemented.')
            }} />
        </Layout>)
}

export default LKPage;