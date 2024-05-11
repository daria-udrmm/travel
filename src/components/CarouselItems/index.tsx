import Item from '../Item';

// Массив с информацией о турах
const tours = [
    {
        id: 1,
        title: 'Путешествие в Париж',
        description: 'Исследуйте прекрасные улицы Парижа и его исторические достопримечательности.',
        date: '2024-05-15',
        city: 'Париж',
        country: 'Франция',
        image: 'https://paris-life.info/wp-content/uploads/2016/11/luvr-paris.jpg',
        url: 'https://example.com/tours/paris'
    },
    {
        id: 2,
        title: 'Путешествие в Рим',
        description: 'Отправьтесь в увлекательное путешествие в Рим и погрузитесь в атмосферу древнего города.',
        date: '2024-06-10',
        city: 'Рим',
        country: 'Италия',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/10099939/pub_64c37a1d2b84c50c8d0e3f92_64c37a7814eaed50f1ff84e3/scale_1200',
        url: 'https://example.com/tours/rome'
    },
    {
        id: 3,
        title: 'Отдых на пляже Бали',
        description: 'Проведите незабываемые дни на прекрасных пляжах Бали и насладитесь красотами природы.',
        date: '2024-07-20',
        city: 'Кута',
        country: 'Индонезия',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/249065/pub_5fa5525cb1fbcf2e2356f5f1_5fa554e347a34812ce31fd05/scale_1200',
        url: 'https://example.com/tours/bali'
    },
    {
        id: 4,
        title: 'Экскурсия в Японию',
        description: 'Погрузитесь в уникальную культуру Японии, посетите традиционные храмы и сады.',
        date: '2024-08-15',
        city: 'Токио',
        country: 'Япония',
        image: 'https://smolensk-travel.com/assets/galleries/58/jap-3.jpg',
        url: 'https://example.com/tours/japan'
    }
];

const CarouselItems = () => {
    return (
        <div className="grid grid-cols-4 gap-8 my-8 mt-[-70px]">
            {tours?.map((elem, id) => (<Item item={elem} key={id} />))}
        </div>
    )
}

export default CarouselItems