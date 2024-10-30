import React from 'react';
import { View,  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from './pages/Category';
import Detail from './pages/Detail';
import Foods from './pages/Foods';

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='CategoryPage' component={Category} 
        options={{
          title:'Tarifka - Category ',
          headerStyle: {backgroundColor:'#FFA500'},
          headerTitleStyle:{color:'white',fontSize:25}

        }}
        />
        <Stack.Screen  name='FoodsPage' component={Foods}
        options={{
          title:'Tarifka - Foods',
          headerStyle:{backgroundColor:'#FFA500'},
          headerTitleStyle:{color:'white', fontSize:25},
          headerTintColor:'white',
        }}
        />
        <Stack.Screen  name='DetailPage' component={Detail}
        options={{
          title:'Tarifka - Detail',
          headerStyle:{backgroundColor:'#FFA500'},
          headerTitleStyle:{color:'white', fontSize:25},
          headerTintColor:'white',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;