import { useState, useEffect } from "react";
import axios from 'axios';


function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

       try {
        const { data: responseData } = await axios.get(url);// data: categoryData şeklinde kullanarak objeyi parçalayıp kullanmış olduk.
        setData(responseData); // Doğrudan 'categories' alanını alıyoruz
        setLoading(false);
    }  catch (err) {
        setError(err.mesaage);
        setLoading(false);
    }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {error,loading,data};
};

export default useFetch;