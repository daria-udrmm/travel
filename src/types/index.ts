export interface ItemType {
  id: number;
  title: string;
  description: string;
  date: string;
  city: string;
  country: string;
  image: string;
  url: string;
}

export interface ItemProps {
  page: number,
  totalPages: number;
  items: ItemType[]
}

export const routes = {
  hotel: '/hotel',
  tour: '/tour'
}