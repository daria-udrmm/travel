import HotelsCatalog from '@/components/HotelsCatalog';
import Layout from '@/components/Layout/index';
import ToursCatalog from '@/components/ToursCatalog/index';
import { ItemProps } from '@/types';

const Hotels = ({ items, totalPages}: ItemProps) => {
    return (
        <Layout>
            <HotelsCatalog hotels={items} totalPages={totalPages} />
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
        // Получаем данные о турах с сервера
        const res = await fetch('http://localhost:3000/allHotels'); // Измените URL на ваш
        const data = await res.json();

        return {
            props: {
                page: data.page,
                items: data.items,
                totalPages: data.totalPages,
            }
        };
    } catch (error) {
        console.error('Ошибка при загрузке данных о турах:', error);
        return {
            props: {
                items: [] // Возвращаем пустой массив в случае ошибки
            }
        };
    }
}

export default Hotels;
