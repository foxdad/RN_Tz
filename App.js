import React, {Component} from 'react';
import {View,StyleSheet} from "react-native";
import Nav from "./App/page/Nav";
import Login from "./App/page/Login";
import RootStackRouter from "./App/Route";


class App extends Component {
    render() {
        return (
            <View style={styles.body}>
                {/*导航组件*/}
                {/*<Nav/>*/}
                {/*<Login/>*/}
                <RootStackRouter/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
  }
})


export default App;
