import React, {Component} from 'react';
import {
    Text, View,
    Dimensions,StyleSheet
} from "react-native";
const {width,height} = Dimensions.get('window');
class Card extends Component {

    render() {
        const {count,describe,color} = this.props


        return (
            <View style={styles.container}>
               <Text style={styles.textCount}>
                   {count}
               </Text>
                <Text style={styles.textDescribe}>
                    {describe}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width: '32%',
        height: 70,
        // borderColor:'#FAFAFA',
        // borderWidth:1,
        justifyContent:'center',
        backgroundColor:'#FAFAFA'


    },
    textCount:{
        fontSize: 30,
        color:'#F79F81',
        textAlign:'center',
        fontWeight:'bold',

    },
    textDescribe:{
        textAlign:'center',
        fontSize: 10,
        color: '#848484'
    }
})

export default Card;