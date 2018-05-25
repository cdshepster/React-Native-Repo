/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ListView from './ListListView';
import MainList from './MainList';
import AddView from './AddView';
import AddItem from './AddViewItem';
import { Provider } from 'react-redux';
import reduce from './reducers/counterReducer';
import {createStore} from 'redux'
import localStorage from './services/localstorage'
import { AsyncStorage } from 'react-native';


const store = createStore(reduce);

const Root = StackNavigator({
    Home: {
        screen: MainList
    },
    ListListView: {
        screen: ListView,
    },
    Add: {
        screen: AddView
    },
    AddItem: {
        screen: AddItem
    }
},
    {
        initialRouteName: 'Home',
    });


export default class App extends Component<{}> {

    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
});
