/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Body,Container, Header, Content, Tab, Tabs, Title } from 'native-base';
import Genre from './Genre';
import Search from './Search';

import GenreList from './GenreList';

const Root = StackNavigator({
    Home: {
      screen: Genre
    },
    GenreListView: {
      screen: GenreList
    }
  },
  {
    initialRouteName: 'Home',
  });


export default class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>MovieMania</Title>
                    </Body>
                </Header>
                <Tabs initialPage={0}>
                    <Tab heading="Genres">
                        <Root/>
                    </Tab>
                    <Tab heading="Search">
                        <Search />
                    </Tab>
                </Tabs>
            </Container>
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
});
