import React from "react";
import { StatusBar, TouchableOpacity, View, StyleSheet } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Picker,
    Item
} from "native-base";
import Modal from "react-native-modal";
import { connect } from "react-redux"
import openMap from 'react-native-open-maps';


class Map extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    state = {
        isModalVisible: false,
        selectedType: null
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    openMap() {

        openMap({ latitude: 41.7452, longitude: -111.8097 });

    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Map</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                <Text>Deep Linking</Text>

       {
 alert("Extra Feature: Deep Linking >> MAP SECTION")
        }
                <Button onPress={this.openMap}style={{alignSelf: "center", alignItems: "center"}}><Text>Open Map</Text></Button>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 70,
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        goal: state.goal
    };
}

export default connect(mapStateToProps)(Map);