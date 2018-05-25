/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    //   Platform,
    StyleSheet,
    //   Text,
    //   View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
import {connect} from 'react-redux'
import { setActiveList, DeleteItem } from './actions/actions';
import Swipeout from 'react-native-swipeout';




class ListListView extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('AddItem')}>
                <Text style={{ marginRight: 10 }}>Add</Text>
            </TouchableOpacity>
        )      
        });

    constructor(props) {
        super(props);

        this.state = {
            listData: this.props.navigation.state.params.selectedList.data,
            name: this.props.navigation.state.params.selectedList.name
        }

        this.props.dispatchSetActiveList(this.props.navigation.state.params.selectedList);
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.renderItems()}
                </Content>
            </Container>
        );
    }
    renderItems() {
        return (<FlatList
            data={this.state.listData}
            keyExtractor={(item, index) => item.name}
            renderItem={this.renderItem}
        />);
    }
    renderItem = ({ item }) => {
        let swipeBtns = [{
            text: 'Delete',
            backgroundColor: 'red',
            onPress: () => {

                console.log(item)
                console.log(this.props.ACTIVELIST)
                this.props.dispatchDeleteItem(item, this.props.ACTIVELIST)
                this.setState({
                    listData: this.props.navigation.state.params.selectedList.data
                });


            }
        }];
            return (
                <Swipeout right={swipeBtns}
                    backgroundColor='transparent'>
                    <ListItem >
                        <Text> {item.name} </Text>
                        <Separator />
                    </ListItem>
                </Swipeout>
            );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    touchableButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    touchableButtonText: {
        fontSize: 20
    }
});

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetActiveList: (list) => dispatch(setActiveList(list)),
        dispatchDeleteItem: (item, list) => dispatch(DeleteItem(item,list))
    };
}
const mapStateToProps = (state) => {
    return {
        ACTIVELIST: state.ACTIVELIST,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListListView);