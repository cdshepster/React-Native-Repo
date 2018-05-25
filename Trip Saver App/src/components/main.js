/* @flow */

import React, { Component } from "react";
import { View, StatusBar, Platform } from "react-native";

import { MainStack} from "../config/router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Main extends Component {
  render() {
      return (
        <MainStack />
      );
    }
  } 

export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(dispatch)
  })
)(Main);
