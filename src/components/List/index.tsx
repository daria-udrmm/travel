import ListItem from '../ListItem/index';

const items = [
    {
        title: "Верим, что каждый путешественник уникален",
        description: "Мы создаём индивидуальные маршруты, которые соответствуют вашим интересам, предпочтениям и бюджету."
    },
    {
        title: "Oбладаем обширной сетью партнеров по всему миру",
        description: "Предлагаем широкий спектр услуг, от бронирования авиабилетов и отелей до организации виз и страхования путешествий."
    },
    {
        title: "Понимаем, что ваше время бесценно",
        description: "Стремимся оптимизировать ваш опыт путешествий, предлагая бесшовные решения и конкурентоспособные цены."
    },
    {
        title: "Постоянно обновляем наши знания о тенденциях путешествий",
        description: "Чтобы предоставлять нашим клиентам самые актуальные рекомендации."
    },
]

const List = () => {
    return (
        <div className="mx-auto max-w-2xl sm:mt-20 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {items.map((elem, index) => {
                    return <ListItem title={elem.title} description={elem.description} key={index}/>
                })}
            </dl>
        </div>
    )
}

export default List;