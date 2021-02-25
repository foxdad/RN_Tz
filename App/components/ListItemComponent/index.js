import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from "react-native";
import {ListItem,Avatar} from "react-native-elements";

const {width} = Dimensions.get('window');
const imgUrl = "../../public/user/flux.png"
class ListItemComponent extends Component {

    render() {
        return (
            <View style={styles.itemBody}>
                <View style={styles.listItemBody}>
                    <Avatar style={styles.itemImage} source={require(imgUrl)}/>
                    <Text style={styles.itemText}>流量明细</Text>
                   <View style={styles.iconToDetails}></View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    itemBody:{
        justifyContent:"center",
        // alignItems:"center"

    },
    listItemBody:{
        width:"98%",
        height:30,
        borderWidth:1,
        borderColor:"#FF0000",
        // justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    },
    itemImage:{
        width:30,
        height: 30
    },
    itemText:{
        fontSize:12,
        marginLeft:5,
    },
    iconToDetails:{
        position:"absolute",
        right:5,
        // top:15,
        // left:30,
        width: 8,
        height: 8,
        borderColor:'#666',
        borderTopWidth:2,
        borderRightWidth:2,
        transform:[{rotate: '45deg'}],
    }

})

export default ListItemComponent;
