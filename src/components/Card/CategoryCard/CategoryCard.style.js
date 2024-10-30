import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor:'#bdbdbd',
        backgroundColor:'#FFA500',
        margin:10,
        flexDirection:'row',
        borderRadius:10,
    },
    body_container:{
        padding:5,
        flex:1,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 20,
    },
    image:{
        resizeMode:'contain',
        backgroundColor:'#FFA500',
        width: 100,
        height: 100,
        borderRadius: 30,
        marginRight: 15,
        paddingLeft:5,
    },
});

