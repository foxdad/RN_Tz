import React, {Component} from 'react';
import {View,StyleSheet,Dimensions} from "react-native";
import {ListItem,Avatar} from "react-native-elements";

const {width} = Dimensions.get('window');
class ListItemComponent extends Component {
    render() {
        return (
            <View>
                <ListItem bottomDivider  containerStyle ={{height:30}}>
                    <Avatar source={require('../../public/user/work_order.png')} avatarStyle={{height:20}} />
                    <ListItem.Content>
                        <ListItem.Title>余额</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        );
    }
}
// const styles = StyleSheet.create({
//     listItemBody:{
//         width,
//         height:10
//     }
// })

export default ListItemComponent;
