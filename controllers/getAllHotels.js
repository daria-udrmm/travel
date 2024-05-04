const hotels = [
    {
        id: 1,
        title: 'Hilton Istanbul Bosphorus',
        description: 'Отель расположен в историческом районе Стамбула, недалеко от Топкапы и средневекового Хипподрома.',
        date: '2024-05-15',
        city: 'Стамбул',
        country: 'Турция',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/529053148.jpg?k=f66f1679bbc6d381f199cb4dbbe6e1d018105de7f8b0d5ad3f0a7d027bd7213f&o=&hp=1',
        url: 'https://www.hilton.com/en/hotels/istebhi-hilton-istanbul-bosphorus/'
    },
    {
        id: 2,
        title: 'Hotel Riu Plaza España',
        description: 'Этот стильный отель находится в центре Мадрида, в нескольких минутах ходьбы от Площади Испании и Роял Паласа.',
        date: '2024-06-10',
        city: 'Мадрид',
        country: 'Испания',
        image: 'https://images.trvl-media.com/lodging/30000000/29350000/29345500/29345493/410854a4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        url: 'https://www.riu.com/en/hotel/spain/madrid/hotel-riu-plaza-espana/'
    },
    {
        id: 3,
        title: 'Marina Bay Sands',
        description: 'Этот знаменитый отель-казино в Сингапуре славится своими потрясающими видами на город и бесконечным бассейном на крыше.',
        date: '2024-07-20',
        city: 'Сингапур',
        country: 'Сингапур',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297612456.jpg?k=44977544783a75ce061805cb73ddf426d5eddcda7489a230b03998ae44d9f3e4&o=&hp=1',
        url: 'https://www.marinabaysands.com/'
    },
    {
        id: 4,
        title: 'Atlantis The Palm',
        description: 'Этот роскошный курорт находится на искусственном острове Пальм Джумейра в Дубае и предлагает непревзойденные удобства и развлечения.',
        date: '2024-08-15',
        city: 'Дубай',
        country: 'ОАЭ',
        image: 'https://assets.kerzner.com/api/public/content/51398544aeea4336a2673b3793b9a078?v=86721310&t=w2880',
        url: 'https://www.atlantis.com/dubai'
    },
    {
        id: 5,
        title: 'The Plaza',
        description: 'Этот роскошный отель находится в самом сердце Нью-Йорка, неподалеку от Центрального парка и 5-й авеню.',
        date: '2024-09-20',
        city: 'Нью-Йорк',
        country: 'США',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496718760.jpg?k=608ceb5268219094ffb5f99c00dd1b869daf59485ca2ce071c49a9bd2feeba4f&o=&hp=1',
        url: 'https://www.theplazany.com/'
    },
    {
        id: 6,
        title: 'The Langham',
        description: 'Этот элегантный отель расположен в районе Саут-Бэнк в Мельбурне и предлагает роскошные номера и высококлассный сервис.',
        date: '2024-10-10',
        city: 'Мельбурн',
        country: 'Австралия',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Langham_london.jpg/1200px-Langham_london.jpg',
        url: 'https://www.langhamhotels.com/en/the-langham/melbourne/'
    },
    {
        id: 7,
        title: 'The Savoy',
        description: 'Изысканный отель в Лондоне, который привлекает гостей своим стилем и богатой историей, находится рядом с Темзой и Ковент Гарденом.',
        date: '2024-11-05',
        city: 'Лондон',
        country: 'Великобритания',
        image: 'https://exp.cdn-hotels.com/hotels/3000000/2860000/2850900/2850850/4d0bf016_z.jpg',
        url: 'https://www.thesavoylondon.com/'
    },
    {
        id: 8,
        title: 'The Ritz-Carlton',
        description: 'Этот роскошный отель находится на побережье Дайян-шу в Шанхае и предлагает великолепные виды на город и роскошные номера.',
        date: '2024-12-01',
        city: 'Шанхай',
        country: 'Китай',
        image: 'https://exp.cdn-hotels.com/hotels/2000000/1440000/1433300/1433273/8f066992_z.jpg',
        url: 'https://www.ritzcarlton.com/en/hotels/china/shanghai/'
    },
    {
        id: 9,
        title: 'Four Seasons Hotel George V',
        description: 'Этот роскошный отель находится в центре Парижа, рядом с Шан-Элизе и Лувром, и предлагает роскошные номера и высококлассный сервис.',
        date: '2025-01-15',
        city: 'Париж',
        country: 'Франция',
        image: 'https://exp.cdn-hotels.com/hotels/4000000/3520000/3514300/3514278/8d1b28aa_z.jpg',
        url: 'https://www.fourseasons.com/paris/'
    },
    {
        id: 10,
        title: 'Waldorf Astoria Amsterdam',
        description: 'Этот роскошный отель находится в историческом центре Амстердама, в нескольких шагах от Королевского дворца.',
        date: '2025-02-20',
        city: 'Амстердам',
        country: 'Нидерланды',
        image: 'https://exp.cdn-hotels.com/hotels/1000000/570000/568800/568773/45a457e1_z.jpg',
        url: 'https://waldorfastoria3.hilton.com/en/hotels/netherlands/waldorf-astoria-amsterdam-AMSWAWA/index.html'
    },
    {
        id: 11,
        title: 'The St. Regis New York',
        description: 'Этот роскошный отель расположен в самом сердце Нью-Йорка, рядом с Кроули Парк и Колумбийским университетом.',
        date: '2025-03-10',
        city: 'Нью-Йорк',
        country: 'США',
        image: 'https://exp.cdn-hotels.com/hotels/1000000/70000/69000/68999/1781e1e3_z.jpg',
        url: 'https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/'
    },
    {
        id: 12,
        title: 'Burj Al Arab Jumeirah',
        description: 'Этот иконический отель в форме паруса является одним из самых роскошных отелей в Дубае и предлагает выдающийся сервис и удобства.',
        date: '2025-04-05',
        city: 'Дубай',
        country: 'ОАЭ',
        image: 'https://exp.cdn-hotels.com/hotels/6000000/5540000/5539500/5539490/74e3d500_z.jpg',
        url: 'https://www.jumeirah.com/en/our-hotels/dubai/burj-al-arab-jumeirah/'
    }
];

// Контроллер для получения информации об отелях
const getAllHotels = (req, res) => {
    const page = parseInt(req.query.page) || 1; // Номер страницы (по умолчанию 1)
    const pageSize = 6; // Размер страницы

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTours = hotels.slice(startIndex, endIndex);

    res.json({
        page: page,
        totalPages: Math.ceil(hotels.length / pageSize),
        items: paginatedTours
    });
};

module.exports = { getAllHotels };
