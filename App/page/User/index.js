import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import ListItemComponent from "../../components/ListItemComponent";

const {width} = Dimensions.get('window')
class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
           <View style={styles.userBody}>

              {/* 用户头像展示区*/}
              <View style={styles.headContainer}>
                 <View style={styles.headContainerMargin}>
                     <Text style={styles.userName}>用户</Text>
                     {/*    头像    */}
                     <Image style={styles.defaultImg} source={require("../../public/randomImg/avater.jpg")}/>
                     {/*昵称*/}
                     <Text style={styles.nickName}>1519974398@qq.com</Text>
                 </View>

              </View>
              {/* 功能集合*/}
              <View style={styles.centerContainer}>
                  <ListItemComponent text={"我的订单"} imgUrl={"order"} />
                  <ListItemComponent text={"我的邀请"} imgUrl={"inviter"} flag={true}/>
                  <ListItemComponent text={"我的工单"} imgUrl={"work_order"} flag={true}/>
                  <ListItemComponent text={"流量明细"} imgUrl={"flux"} flag={true}/>
              </View>
           {/*    退出登录*/}
            <TouchableOpacity style={styles.logout} activeOpacity={0.8} onPress={()=>{}}>
                <Text>
                    退出登录
                </Text>
            </TouchableOpacity>
           </View>
        )
    }
}


const styles = StyleSheet.create({
    userBody :{
        flex:1,
        backgroundColor:"#F2F2F2",
        alignItems:"center"

    },
    headContainer:{
        width:width,
        height:80,
        backgroundColor:"#027AFF"
    },
    headContainerMargin:{
        marginLeft:"2%",
        // justifyContent:"center"
    },
    defaultImg:{
        width:40,
        height: 40,
        borderWidth: 1,
        borderColor: "#00A0E9",
        borderRadius: 5,
        marginTop:"2%"

    },
    userName:{
        fontSize:15,
        color:"#FAFAFA",
    },
    nickName:{
        position:"absolute",
        top:"55%",
        left:"10%",
        color: "#FAFAFA"

    },

    centerContainer:{
        width:"98%",
        borderWidth:1,
        borderColor:"#FAFAFA",
        backgroundColor: "#FAFAFA",
        borderRadius:10,
        marginTop:10,
    },
//    退出登录
    logout:{
        width:"98%",
        height:30,
        borderWidth:1,
        borderColor:"#FAFAFA",
        borderRadius:5,
        marginTop: "30%",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#00A0E9"
    }
})

export default User;


