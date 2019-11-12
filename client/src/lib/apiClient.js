import axios from 'axios';

const url = "https://www.googleapis.com/books/v1/volumes";
const apiKey = process.env.REACT_APP_API_KEY;

const getData = async (searchTerm) => {
    try {
        const response = await axios.get(`${url}?q=${searchTerm}&key=${apiKey}&maxResults=5`);
        const data = response.data.items;
        return data;

    }
    catch (err) {
        const error = "error";
        return error;
    }
};

export { getData };