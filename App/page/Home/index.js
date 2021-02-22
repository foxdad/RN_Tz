import React, {Component} from 'react';
import {
    Text,TouchableOpacity,
    View,StyleSheet,Dimensions
} from "react-native";
import Swiper from 'react-native-swiper';
import  {Bar,Pie,Circle,CircleSnail} from 'react-native-progress';
// import { PricingCard } from 'react-native-elements';
import Card from "../../components/Card";

const {width,height,scale} = Dimensions.get("window")
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
                        <Text style={styles.mySubscriptText}>我的订阅</Text>
                    </TouchableOpacity>
                   <View style={styles.mySubscriptBody}>
                      <View style={styles.mySubscriptLeft}>
                          <Text style={styles.mySubscriptHeadText}>基础订阅 B 型</Text>
                          <Text style={styles.mySubscriptCenterText}>于 2021/03/22 到期，距离到期还有 28 天，6 日后重置流量</Text>
                          <Bar progress={0.2} width={width/(scale-1)} height={4} color={'#82b54b'} borderWidth={0} unfilledColor={'#e9ecef'}/>
                          <Text style={styles.mySubscriptBottom}>
                              已用 <Text style={styles.mySubscriptBold}>6.37 GB</Text> / 总计
                              <Text style={styles.mySubscriptBold}>500.00 GB</Text>
                          </Text>
                      </View>
                   </View>
                    {/*<Pie progress={0.4}  />*/}
                    {/*<Circle  />*/}
                    {/*<CircleSnail color={['red', 'green', 'blue']} />*/}
                </View>
                {/*    使用文档*/}
                <View style={styles.useDoc}>
                    <Text>使用文档</Text>
                    <View style={styles.useDocBody}>
                        <View style={styles.useDocTextBody}>
                            <Text style={styles.useDocTex}>客户端</Text>
                            <View>

                            </View>
                        </View>
                    </View>
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
        // backgroundColor:'#819FF7'
    },

    mySubscriptText:{
        fontSize: 20,
        color: '#6E6E6E',
        marginBottom:10
    },
    mySubscriptBody:{
        width:width,
        height:100,
        backgroundColor:'#fff',
        justifyContent:'center',
        // marginLeft:20
    },
    mySubscriptLeft:{
        width:width,
        height:100,
        marginLeft:20,
        // backgroundColor:'#fff',
        justifyContent:'center',
    },
    mySubscriptHeadText:{
        fontSize:14,
        marginBottom:3,
        // color: '#6E6E6E',
    },
    mySubscriptCenterText:{
        fontSize:8,
        marginBottom:3,
        color: '#6E6E6E',
    },
    mySubscriptBottom:{
        marginTop:2,
        fontSize:8,
        color: '#6E6E6E',
    },
    mySubscriptBold:{
        fontWeight:'bold',
        color:'#000000'
    },
//    使用文档
    useDoc:{
        width:width,
        height:100,
        marginTop:50,
        // backgroundColor:'#fff',
    },
    useDocBody:{
        width:width,
        height:100,
        backgroundColor:'#fff',
    },
    useDocTextBody:{
        width:width,
        height:100,
        // marginLeft: 20,
        // fontSize:14,
        // backgroundColor:'#fcfcfd',
        // justifyContent:'center'
    },
    useDocTex:{
        width:width,
        height:40,
        fontSize:14,
        // textIndent:20,
        backgroundColor:'#58ACFA',
        lineHeight:40
        // justifyContent:'center',
    }
});

export default Home;