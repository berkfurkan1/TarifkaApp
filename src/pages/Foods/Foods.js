import React from 'react';
import { View, Text ,FlatList } from 'react-native';

import Config from 'react-native-config';

import FoodCard from '../../components/Card/FoodCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Foods = ({navigation, route}) => {
    const {strCategory} = route.params; // kategoriyi route params ile alıyoruz.
    const {loading, data, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);// category parametresini API ye dahil ediyoruz
                                          //`${Config.API_URL_FOOD}?c=${strCategory}`
                                          //`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
    
    const handleFoodSelect = idMeal => {
        navigation.navigate('DetailPage',{idMeal});
    };

    

    if (loading){
        return <Loading />;
    }

    if (error){
        return <Error />;
    }

    const renderFood = ({item}) => (
        <FoodCard food={item} onSelect={()=> handleFoodSelect(item.idMeal)} />
    );

    return(
        <View>
            <FlatList 
            data={data.meals}
            renderItem={renderFood}
            />
        </View>
    )

};

export default Foods;








/** 
 
const Foods = ({navigation}) => {
    
    const {loading,data,error} = useFetch(Config.API_URL_FOOD+'c='+item.strCategory);
    
    const handleFoodSelect = id =>{
        navigation.navigate('DetailPage',{id})
    };
    
    const renderFood = ({item}) => <FoodCard food={item} onSelect={()=> handleFoodSelect(item.id)} />
    
    if(loading){
        return <Loading />
    };
    if(error){
        return <Error />
    };
    
    return(
        <View>
        <FlatList 
        data={data.meals}
        renderItem={renderFood}
        keyExtractor={(item) => item.idMeal}
        />
        </View>
    )
    
};

export default Foods;
* */