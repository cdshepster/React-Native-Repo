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
    TextInput,
    Separator
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ListView from './ListListView'
import { Label, Input, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
import localStorage from './services/localstorage';
import { AddItemToList } from './actions/actions';
import {connect} from 'react-redux';

class AddViewItem extends Component<{}> {

    static navigationOptions = {
        title: "Add Item"
    }
    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            selected1: null
        }
    }

    submitForm(value1,selected1) {
        item = {
            id: (Math.floor(Math.random() * 2000)).toString(),
            name: selected1,
            isVisible: true,
        }

        list = this.props.ACTIVELIST;

        this.props.dispatchAddItemToList(item,list);

        this.props.navigation.navigate('ListListView', {selectedList: list, title: list.name});
        
        // //localStorage.add(item.name, this.state.listData)
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
                            placeholder='Search'                           
                        />
                        <TextInput
                            style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}
                            placeholder='Not In List? Add item.'                            onChangeText={(value1) => this.setState({ value1 })} //note this shortcut code
                        />
                        <Picker
                        placeholder="Select Item From List..."
                            iosHeader="Select Image"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Sandwich" value="Sandwich" />
                            <Item label="KitKat" value="kitkat" />
                            <Item label="Soda" value="soda" />
                            <Item label="Lettuce" value="lettuce" />
                            <Item label="Apple" value="apple" />
                        </Picker>

                        <TouchableOpacity onPress={() => this.submitForm(this.state.value1,this.state.selected1)} >
                            <Text>Add Item</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
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
        dispatchAddItemToList: (item,list) => dispatch(AddItemToList(item,list))
    };
}
const mapStateToProps = (state) => {
    return {
        ACTIVELIST: state.ACTIVELIST,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddViewItem);