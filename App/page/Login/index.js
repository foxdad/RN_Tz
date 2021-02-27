import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text, Dimensions, TextInput} from "react-native";

const {width}  = Dimensions.get('window')

class Login extends Component {
    render() {
        return (
            <ImageBackground style={{flex:1}} source={{uri:"https://images5.alphacoders.com/106/thumb-1920-1069099.png"}}>

                <View style={styles.loginContainer}>
                   <View style={styles.body}>
                       {/* <Text style={styles.title}>LLAP核心面板（动态）</Text>*/}
                       {/*<Text style={styles.describe}>在大数据的时代下，其实我们都是在裸奔！</Text>*/}
                       <Text style={styles.mailText}>邮箱</Text>
                        <TextInput style={styles.userInput}/>
                       <Text style={styles.passText}>密码</Text>
                        <TextInput style={styles.passInput}/>
                   </View>
                </View>



            </ImageBackground>

        );
    }
}

export default Login;
const styles = StyleSheet.create({

    loginContainer:{
        alignItems: "center",
        justifyContent:"center",
        // width:"80%",
        // height:80,
        //
        // https://images5.alphacoders.com/106/thumb-1920-1069099.png
        // backgroundImage:uri
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
        textAlign:"center"

    },
    describe:{
        fontSize:10,
        textAlign:"center"
    },
    userInput:{
        position:"absolute",
        top: 0,
        left:80,
        width:"100%",
        height: 30,
        borderWidth: 1,
        padding:0,

    },
    passInput:{
        position:"absolute",
        bottom:0,
        left:80,
        width:"100%",
        height: 30,
        borderWidth: 1,
        padding:0,

    },
    mailText:{
        position:"absolute",
        top:5,
        left:10

    },
    passText:{
        position:"absolute",
        bottom:5,
        left:10

    }


})
