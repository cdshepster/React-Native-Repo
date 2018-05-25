/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, FlatList, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Separator, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ListView from './ListListView';
import localStorage from './services/localstorage';
import Swipeout from 'react-native-swipeout';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { DeleteList } from './actions/actions';



class MainList extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({
        title: "Grocery List",
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Add')}>
                <Text style={{ marginRight: 10 }}>Add</Text>
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
    }

    renderList() {
        return (<FlatList
            data={this.props.list}
            keyExtractor={(item, index) => item.id}
            renderItem={this.renderListItem}
        />);
    }
    renderListItem = ({ item }) => {
        let swipeBtns = [{
            text: 'Delete',
            backgroundColor: 'red',
            onPress: () => {
                this.props.dispatchDeleteList(item);
            }
        }];
            return (
                <Swipeout right={swipeBtns}
                    backgroundColor='transparent'>
                    <ListItem button underlayColor='rgb(192,192,192,1.0)'
                        onPress={() => this.props.navigation.navigate('ListListView', { selectedList: item, title: item.name })} >
                        <Text> {item.name} </Text>
                        <Separator />
                    </ListItem>
                </Swipeout>
            )
        }

    render() {
        return (
            <Container>
                <Content>
                    {this.renderList()}
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeleteList: (list) => dispatch(DeleteList(list))
    };
}
const mapStateToProps = (state) => {
    return {
        list: state.LISTS
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MainList);