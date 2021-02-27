import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text,TouchableOpacity} from "react-native";
import {Avatar} from "react-native-elements";
import im_arr from "./im_arr";

const {width} = Dimensions.get('window');
class ListItemComponent extends Component {
    render() {
        const {imgUrl,text,flag} = this.props
        return (
            <View style={styles.itemBody}>
                {
                    flag?<View style={styles.hr}>

                    </View>:null
                }
                <TouchableOpacity style={styles.listItemBody}>
                    <Avatar style={styles.itemImage} source={im_arr[imgUrl]}/>
                    <Text style={styles.itemText}>{text}</Text>
                    <View style={styles.iconToDetails}></View>
                </TouchableOpacity>

            </View>
        );
    }
}
export default ListItemComponent;

const styles = StyleSheet.create({

    itemBody:{
        width:"100%",
        justifyContent:"center",
        // alignItems:"center"

    },
    hr:{
        position:"absolute",
        top:0,
        right: 0,
        width:"98%",
        borderTopWidth:0.8,
        borderColor:"#E6E6E6",
    },
    listItemBody:{
        // width:"80%",
        height:35,
        // borderWidth:1,
        // borderTopWidth: 1,
        // borderColor:"#E6E6E6",
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
        right:10,
        // top:15,
        // left:30,
        width: 8,
        height: 8,
        borderColor:"#D8D8D8",
        borderTopWidth:1,
        borderRightWidth:1,
        transform:[{rotate: '45deg'}],
    }

})



