import { loadMoreTours } from '@/api';
import { ItemType, routes } from '@/types';
import { useState } from 'react';
import Sort from '../Sort/index';
import Item from '../Item/index';

type TourscatalogProps = {
  tours: ItemType[];
  totalPages: number;
}

const ToursCatalog = ({ tours: defaultTours, totalPages: defaultTotalPages }: TourscatalogProps) => {
  const [tours, setTours] = useState<ItemType[]>(defaultTours);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(defaultTotalPages)

  const loadMore = async () => {
    const newTours = await loadMoreTours(currentPage)
    if (newTours) {
      setTours([...tours, ...newTours.items]);
      setCurrentPage(currentPage + 1);
    }
  };

  const [sortValue, setSortValue] = useState<string>('');

  const handleSortChange = (value: string) => {
    setSortValue(value);
    // здесь можно выполнить логику для сортировки товаров
    console.log('Выбран метод сортировки:', value);
  };

  const [showAsTwo, setShowAsTwo] = useState(false);

  const onSort = (value: boolean) => {
    setShowAsTwo(value)
  }

  return (
    <>
      <Sort onChange={handleSortChange} onSort={onSort} sortAs={showAsTwo} />
      <div className={`grid ${showAsTwo ? 'grid-cols-2' : 'grid-cols-3'} gap-8 my-8`}>
        {tours?.map(elem => (<Item item={elem} showAsTwo={showAsTwo} route={routes.tour}/>))}
      </div>
      {currentPage !== totalPages && (<button className="bg-violet-500 text-white mx-auto rounded-md flex justify-center px-4 py-2 mt-4 hover:bg-violet-600" onClick={loadMore}>
        Загрузить еще
      </button>)}
    </>
  )
}

export default ToursCatalog;