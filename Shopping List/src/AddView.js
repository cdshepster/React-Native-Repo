/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View, Button,
    FlatList,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ListView from './ListListView'
import { Label, Input, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import localStorage from './services/localstorage';
import Icon from 'react-native-vector-icons/Foundation';
import { connect } from 'react-redux'

import { AddList, DeleteList } from './actions/actions';




class AddView extends Component<{}> {

    static navigationOptions = {
        title: "Add List"

    }
    constructor(props) {
        super(props);

        this.state = {
            selected1: null,
            value1: null
        }
    }

    submitForm(value1, selected1) {
        item = {
            id: (Math.floor(Math.random() * 2000)).toString(),
            name: value1,
            image: selected1,
            isVisible: true,
            data: []
        }

        this.props.dispatchAddList(item);

        this.props.navigation.navigate('ListListView', { selectedList: item, title: item.name })
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
            <Container >
                <Content>
                    <Form style={styles.container}>
                        <TextInput
                            style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}
                            placeholder='List Name' onChangeText={(value1) => this.setState({ value1 })} //note this shortcut code
                        />
                        <Picker
                            placeholder="Select Image..."
                            iosHeader="Select Image"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Icon name="next" color="#000" size={200} />
                            <Item label="ATM Card" value="key1" />
                            <Item label="Debit Card" value="key2" />
                            <Item label="Credit Card" value="key3" />
                            <Item label="Net Banking" value="key4" />
                        </Picker>

                        <TouchableOpacity onPress={() => this.submitForm(this.state.value1, this.state.selected1)} >
                            <Text>Create List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddList: (item) => dispatch(AddList(item)),
    };
}

export default connect(null, mapDispatchToProps)(AddView);