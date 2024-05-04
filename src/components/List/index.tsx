import ListItem from '../ListItem/index';

const items = [
    {
        title: "Push to deploy",
        description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
    },
    {
        title: "SSL certificates",
        description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
    },
    {
        title: "Simple queues",
        description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
    },
    {
        title: "Advanced security",
        description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
    },
]

const List = () => {
    return (
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {items.map((elem, index) => {
                    return <ListItem title={elem.title} description={elem.description} key={index}/>
                })}
            </dl>
        </div>
    )
}

export default List;