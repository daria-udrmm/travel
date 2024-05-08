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
    },
    {
        id: 5,
        title: 'Отдых на Гавайях',
        description: 'Насладитесь солнцем, пляжами и природой Гавайев в этом удивительном туре.',
        date: '2024-09-20',
        city: 'Гонолулу',
        country: 'США',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/1590365/pub_5f183d92d94549043307e56f_5f183f4da9d8ca0f86582c55/scale_1200',
        url: 'https://example.com/tours/hawaii'
    },
    {
        id: 6,
        title: 'Сафари в Кения',
        description: 'Исследуйте африканскую природу и встретьте разнообразных животных в этом захватывающем сафари.',
        date: '2024-10-10',
        city: 'Найроби',
        country: 'Кения',
        image: 'https://i.content4travel.com/cms/img/u/kraj/1/kenia_0.jpg?version=221210-04',
        url: 'https://example.com/tours/kenya'
    },
    {
        id: 7,
        title: 'Путешествие в Нью-Йорк',
        description: 'Ощутите пульс мегаполиса и погрузитесь в уникальную атмосферу Нью-Йорка.',
        date: '2024-11-05',
        city: 'Нью-Йорк',
        country: 'США',
        image: 'https://i0.wp.com/guruturizma.ru/wp-content/uploads/2014/07/0glavNY.jpg?fit=1280%2C850&ssl=1',
        url: 'https://example.com/tours/new-york'
    },
    {
        id: 8,
        title: 'Отдых на острове Мальдивы',
        description: 'Проведите романтический отдых на лучших курортах Мальдивского архипелага.',
        date: '2024-12-01',
        city: 'Мале',
        country: 'Мальдивы',
        image: 'https://avatars.mds.yandex.net/get-marketcms/1533751/img-edfa3def-f66e-46c4-84e8-e76a20f7ff27.jpeg/optimize',
        url: 'https://example.com/tours/maldives'
    },
    {
        id: 9,
        title: 'Путешествие в Кейптаун',
        description: 'Отправьтесь в Кейптаун и познакомьтесь с уникальной культурой Южной Африки.',
        date: '2025-01-15',
        city: 'Кейптаун',
        country: 'Южная Африка',
        image: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1651009850_21-vsegda-pomnim-com-p-keiptaun-okean-foto-31.jpg',
        url: 'https://example.com/tours/cape-town'
    },
    {
        id: 10,
        title: 'Экскурсия в Сан-Франциско',
        description: 'Погрузитесь в атмосферу Сан-Франциско и посетите его знаменитые достопримечательности.',
        date: '2025-02-20',
        city: 'Сан-Франциско',
        country: 'США',
        image: 'https://www.forumdaily.com/wp-content/uploads/2021/07/shutterstock_518796124-1.jpg',
        url: 'https://example.com/tours/san-francisco'
    },
    {
        id: 11,
        title: 'Отдых на острове Фиджи',
        description: 'Проведите время на роскошных пляжах Фиджи и насладитесь бирюзовой водой океана.',
        date: '2025-03-10',
        city: 'Нади',
        country: 'Фиджи',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/32/1d/8a/likuliku-lagoon-resort.jpg',
        url: 'https://example.com/tours/fiji'
    },
    {
        id: 12,
        title: 'Путешествие в Лондон',
        description: 'Посетите столицу Великобритании и окунитесь в ее богатую историю и культуру.',
        date: '2025-04-05',
        city: 'Лондон',
        country: 'Великобритания',
        image: 'https://otdyhateli.com/wp-content/uploads/2019/09/london3.jpg',
        url: 'https://example.com/tours/london'
    },
];

// Контроллер для получения информации о турах
const getAllTours = (req, res) => {
    const page = parseInt(req.query.page) || 1; // Номер страницы (по умолчанию 1)
    const pageSize = 6; // Размер страницы

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTours = tours.slice(startIndex, endIndex);

    res.json({
        page: page,
        totalPages: Math.ceil(tours.length / pageSize),
        items: paginatedTours
    });
};

module.exports = { getAllTours };
