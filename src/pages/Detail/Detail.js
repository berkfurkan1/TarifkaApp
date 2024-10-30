import React from 'react';
import { View, Text ,Button,Image,StyleSheet,ScrollView,TouchableOpacity,Linking} from 'react-native';


import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Detail.style';


const Detail = ({route}) => {
    const {idMeal} = route.params
    console.log(idMeal);
    const {loading,data,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    //console.log(loading,data,error);

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    const detailData = data.meals[0] ;
    const {strMealThumb, strMeal, strArea, strInstructions, strYoutube} = detailData;
    return(
        <ScrollView style={styles.container} >
            <Image source={{uri:strMealThumb}} style={styles.image} />
            <View style={styles.textContainer} >
                <Text style={styles.title} > {strMeal} </Text>
                <Text style={styles.area} >{strArea} </Text>
                <Text style={styles.instructions} >{strInstructions} </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(strYoutube)} >
                <Text style={styles.buttonText} > Watch on Youtube </Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

export default Detail;

