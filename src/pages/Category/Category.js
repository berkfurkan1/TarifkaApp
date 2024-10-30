import React,{useState, useEffect} from 'react';
import { View,Text, FlatList,ActivityIndicator } from 'react-native';

import Config from 'react-native-config';
import axios from 'axios';

import CategoryCard from '../../components/Card/CategoryCard';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Category = ({navigation}) =>{

    const {loading,data,error} = useFetch(Config.API_URL_CATEGORY);
    
    const handleCategorySelect = strCategory =>{
        navigation.navigate('FoodsPage',{strCategory})
    };

    const renderCategory =  ({item}) => <CategoryCard category={item} onSelect={()=> handleCategorySelect(item.strCategory)} />

    if(loading){
        return <Loading />;
    }
    if(error){
        return <Error />;
    }

    return(
        <View>
            <FlatList 
            data={data.categories} 
            renderItem={renderCategory} 
            keyExtractor={(item) => item.idCategory} // Benzersiz anahtar için 'idCategory' kullanıyoruz
            />
        </View>
        
    )
};

export default Category;

/** 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

       try {
        const { data: categoryData } = await axios.get(Config.API_URL_CATEGORY);// data: categoryData şeklinde kullanarak objeyi parçalayıp kullanmış olduk.
        setData(categoryData.categories); // Doğrudan 'categories' alanını alıyoruz
        setLoading(false);
    }  catch (err) {
        setError(err.mesaage);
        setLoading(false);
    }
    };
    **/
   