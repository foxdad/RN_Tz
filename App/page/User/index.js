import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import ListItemComponent from "../../components/ListItemComponent";
import {Avatar} from "react-native-elements";

const itemList = [
    {title:"我的工单",iconUrl:"../../public/user/flux.png"},
    {title:"我的余额",iconUrl:"../../public/user/flux.png"},
    {title:"我的订单",iconUrl:"../../public/user/flux.png"},
    {title:"我的邀请",iconUrl:"../../public/user/flux.png"},
    {title:"修改密码",iconUrl:"../../public/user/flux.png"}
]




class User extends Component {
    render() {

       const rendData = (item)  => {
            return (
                <View style={styles.itemBody}>
                    <View style={styles.listItemBody}>
                        <Avatar style={styles.itemImage} source={require({item.iconUrl})}/>
                        <Text style={styles.itemText}>流量明细</Text>
                        <View style={styles.iconToDetails}></View>
                    </View>

                </View>
            )
        }


        return (
            <View style={styles.userBody}>
                <Text>用户</Text>
            {/*    修改密码*/}
            {/*我的工单*/}
            <FlatList data={itemList} renderItem={rendData}/>
            <ListItemComponent imgUrlT={"../../public/user/flux.png"}/>
            {/*我的订单*/}
            {/*我的邀请*/}
            {/*流量明细*/}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    userBody :{
        flex:1,
        backgroundColor:"#F2F2F2"
    },
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

export default User;
