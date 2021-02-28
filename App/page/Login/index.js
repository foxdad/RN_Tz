import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity} from "react-native";

const {width,height}  = Dimensions.get('window')

class Login extends Component {
    render() {
        return (
        <ImageBackground  source={require("../../public/randomImg/LoginBack.jpg")} style={{flex:1}}>
                <View style={styles.loginContainer}>
                   <View style={styles.body}>
                       {/* <Text style={styles.title}>LLAP核心面板（动态）</Text>*/}
                       {/*<Text style={styles.describe}>在大数据的时代下，其实我们都是在裸奔！</Text>*/}
                       <Text style={styles.mailText} >邮箱</Text>
                        <TextInput style={styles.userInput} placeholder={"请输入邮箱"}/>
                        {/*中间的线*/}
                        <View style={styles.hr}></View>
                        <Text style={styles.passText}>密码</Text>
                        <TextInput style={styles.passInput} placeholder={"请输入密码"}/>
                         {/* 忘记密码    */}
                         <TouchableOpacity style={styles.forgetPass}>
                             <Text style={styles.forgetText}>忘记密码？</Text>
                         </TouchableOpacity>

                   </View>
                    {/*  注册登录按钮  */}
                    <View style={styles.buttonBody}>
                        <TouchableOpacity style={styles.registerButton} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>注册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>登录</Text>
                        </TouchableOpacity>
                    </View>

                </View>
        </ImageBackground>
        );
    }
}

export default Login;
const styles = StyleSheet.create({

    loginContainer:{
        flex:1,
        alignItems: "center",
        // justifyContent:"center",
        backgroundColor: "#F2F2F2",
    },
    body:{
        width:"100%",
        height:60,
        marginTop:"40%",
        backgroundColor:"#f5f6fa",
        borderWidth:1,
        borderColor:"#f5f6fa"
    },
    title:{
        fontSize:26,
        textAlign:"center",

    },
    describe:{
        fontSize:10,
        textAlign:"center"
    },
    hr:{
        width:width,
        position:"absolute",
        top: 30,
        left:10,
        borderTopWidth:1,
        opacity:0.8,
        borderColor: "#E6E6E6",

    },
    userInput:{
        position:"absolute",
        top: 0,
        left:80,
        width:"100%",
        height: 30,
        // borderWidth: 1,
        padding:0,

    },
    passInput:{
        position:"absolute",
        bottom:0,
        left:80,
        width:"100%",
        height: 30,
        // borderWidth: 1,
        padding:0,

    },
    mailText:{
        position:"absolute",
        top:5,
        left:10,

    },
    passText:{
        position:"absolute",
        bottom:5,
        left:10,
    },
    forgetPass:{
        position:"absolute",
        bottom:6,
        right:10,
    },
    forgetText:{
        fontSize:10,
        color:"#027AFF"
    },
    buttonBody:{
        width:"90%",
        height:30,
        marginTop: 10,
        // borderWidth: 1,
        // borderColor:"#027AFF",
        alignItems: "center",
        flexDirection:'row',
        justifyContent:"space-around",
    },
    registerButton:{
        width:"45%",
        height:30,
        borderWidth: 1,
        borderColor:"#00A0E9",


    },
    loginButton:{
        width:"45%",
        height:30,
        borderWidth: 1,
        borderColor:"#027AFF",
        backgroundColor:"#00A0E9"

    },
    buttonText:{
        textAlign:"center",
        lineHeight:30

    }


})
