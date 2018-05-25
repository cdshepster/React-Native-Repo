/* @flow */

import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as COLOR from "../config/colors";

import { bindActionCreators } from "redux";
import * as screenTrackActions from "../actions/screen-tracking";
import { connect } from "react-redux";
import getCurrentRouteName from "../utils/get-current-route";

class DrawerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSelected: true,
      settingsSelected: false,
      rewardsSelected: false,
      historySelected: false,
      mapSelected: false,
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          paddingTop: 40
        }}
      >
          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.props.actions.setScreen("Home");
              this.setState({
                homeSelected: true,
                rewardsSelected: false,
                settingsSelected: false,
                historySelected: false,
                aboutSelected: false,
                mapSelected: false,
              });
              navigation.navigate("HomeItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row"
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="home"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Activity
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.props.actions.setScreen("Rewards");
              this.setState({
                homeSelected: false,
                rewardsSelected: true,
                settingsSelected: false,
                historySelected: false,
                aboutSelected: false,
                mapSelected: false,
              });
              navigation.navigate("RewardItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row"
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="star"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Rewards
              </Text>
            </View>
          </TouchableOpacity>

           <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.props.actions.setScreen("History");
              this.setState({
                homeSelected: false,
                settingsSelected: false,
                rewardsSelected: false,
                historySelected: true,
                aboutSelected: false,
                mapSelected: false,
              });
              navigation.navigate("HistoryItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row"
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="book"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                History
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.props.actions.setScreen("About");
              this.setState({
                homeSelected: false,
                settingsSelected: false,
                rewardsSelected: false,
                historySelected: false,
                aboutSelected: true,
                mapSelected: false,

              });
              navigation.navigate("AboutItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row"
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="account"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                About
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 18 }}
            onPress={() => {
              this.props.actions.setScreen("Settings");
              this.setState({
                homeSelected: false,
                rewardsSelected: false,
                settingsSelected: true,
                historySelected: false,
                aboutSelected: false,
                mapSelected: false,
              });

              navigation.navigate("SettingsItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row",
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="settings"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 18 }}
            onPress={() => {
              this.props.actions.setScreen("Map");
              this.setState({
                homeSelected: false,
                rewardsSelected: false,
                settingsSelected: false,
                historySelected: false,
                aboutSelected: false,
                mapSelected: true
              });

              navigation.navigate("MapItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row",
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="map"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Map (EXTRA FEATURE)
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: COLOR.BACKGROUND,
              height: 2
            }}
          />
        </View>

    );
  }
} 

export default connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators(
      Object.assign({}, screenTrackActions),
      dispatch
    )
  })
)(DrawerContainer);
