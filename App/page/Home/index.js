import React, {Component} from 'react';
import {
    Text,TouchableOpacity,
    View,StyleSheet,Dimensions
} from "react-native";
import Swiper from 'react-native-swiper';
import { PricingCard } from 'react-native-elements';
import Card from "../../components/Card";

const {width,height} = Dimensions.get("window")
class Home extends Component {
    render() {
        return (
            <View style={styles.home_body}>
                <View   style={styles.container}>
                    <Swiper

                        // showsButtons = {true}
                        autoplay={true}
                    >
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Android</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>iOS</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>Java</Text>
                        </View>
                    </Swiper>
                </View>

                <View style={styles.countOrder}>
                    <Text style={styles.countLan}>总览</Text>
                    <View style={styles.countStay}>
                        <Card count={'0'} describe={'待付工单'} color={'#eee'}></Card>
                        <Card count={'0'} describe={'待办工单'} color={'#eee'}></Card>
                        <Card count={'0'} describe={'我的邀请'} color={'#eee'}></Card>
                        {/*<PricingCard*/}
                        {/*    color="#4f9deb"*/}
                        {/*    title="Free"*/}
                        {/*    price="$0"*/}
                        {/*    info={['1 User', 'Basic Support', 'All Core Features']}*/}
                        {/*    // button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}*/}
                        {/*/>*/}
                    </View>
                </View>
            {/*    我的订阅 */}
                <View style={styles.mySubscript}>
                    <TouchableOpacity>
                        <Text>我的订阅</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home_body:{
      width:width,
      height:200,
    },
    container: {
        width:width,
        height:200,
    },
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    countOrder:{
        width:width,
        height:100,
        // backgroundColor:'#e00'
    },
    countLan:{
        fontSize: 20,
        marginTop:10,
        marginBottom:10,
        color: '#6E6E6E'
    },
    countStay:{
        width:width,
        height:100,
        flexDirection:'row',
        justifyContent:'space-around'
    },
//    我的订阅
    mySubscript:{
        width:width,
        height:100,
        marginTop: 30,
        backgroundColor:'#819FF7'
    }
});

export default Home;