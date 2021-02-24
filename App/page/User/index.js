import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";
import ListItemComponent from "../../components/ListItemComponent";


class User extends Component {
    render() {



        return (
            <View style={styles.userBody}>
                <Text>用户</Text>
            {/*    修改密码*/}
            {/*我的工单*/}
            <ListItemComponent/>
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
    }
})

export default User;
