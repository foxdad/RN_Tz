import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from "react-native";
import {ListItem,Avatar} from "react-native-elements";

const {width} = Dimensions.get('window');
class ListItemComponent extends Component {
    render() {
        return (
            <View style={styles.itemBody}>
                {/*<ListItem bottomDivider  containerStyle ={{height:30}}>*/}
                {/*    <Avatar source={require('../../public/user/work_order.png')} avatarStyle={{height:20}} />*/}
                {/*    <ListItem.Content>*/}
                {/*        <ListItem.Title>余额</ListItem.Title>*/}
                {/*    </ListItem.Content>*/}
                {/*    <ListItem.Chevron />*/}
                {/*</ListItem>*/}

                <View style={styles.listItemBody}>
                    <Image style={styles.itemImage} source={require("../../public/user/flux.png")}></Image>
                    {/*<Text>*/}
                    {/*    内部*/}
                    {/*</Text>*/}
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
        // justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center"
    },
    itemImage:{
        width:30,
        height: 30
    },
    iconToDetails:{
        // position:"absolute",
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
