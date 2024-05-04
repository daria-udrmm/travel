export const fetchTours = async () => {
    try {
        const res = await fetch('/allTours');
        if (!res.ok) {
            throw new Error('Ошибка при получении данных о турах');
        }
        return await res.json();
    } catch (error) {
        console.error('Ошибка при получении туров:', error);
    }
};

export const loadMoreTours = async (currentPage: number) => {
    try {
        const response = await fetch(`/allTours?page=${currentPage + 1}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных о турах');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке туров:', error);
    }
};

export const fetchHotels = async () => {
    try {
        const res = await fetch('/allHotels');
        if (!res.ok) {
            throw new Error('Ошибка при получении данных о турах');
        }
        return await res.json();
    } catch (error) {
        console.error('Ошибка при получении туров:', error);
    }
};

export const loadMoreHotels= async (currentPage: number) => {
    try {
        const response = await fetch(`/allHotels?page=${currentPage + 1}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных о турах');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке туров:', error);
    }
};