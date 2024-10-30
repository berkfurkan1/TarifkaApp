import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#fff'
    },
    image:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    textContainer:{
        padding:10,
        
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#b52d2d',
        marginTop:10,
    },
    area:{
        fontSize:18,
        color:'#b52d2d',
        marginBottom:10,
    },
    instructions:{
        fontSize:16,
        color:'#333',
    },
    button:{
        backgroundColor:'#ff4d4d',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:10,
        marginTop:20,
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },

})