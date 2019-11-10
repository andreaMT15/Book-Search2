import axios from 'axios';

export const getData = async (searchTerm) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    const key = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    try {
        const response = await axios.get(`${url}${searchTerm}key=${key}&maxResults=5`);
        const data = response.data.items;
        return data;
    }
    catch (err) {
        throw err;
    }
};

