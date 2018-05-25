/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default class PageFour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
            Welcome to Page Four
            </Text>
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('PageThree')}}
            style={styles.touchableButton}
            >
            <Text
                style={styles.touchableButtonText}
            >
                Go to PageThree
            </Text>
            </TouchableOpacity>
        </View>
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
