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
import {connect} from "react-redux"


class About extends React.Component {

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
                        <Title>About</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Text style={{marginBottom: 10,fontSize: 30, fontWeight: "bold", fontStyle: "italic"}}>Profile Info.</Text>
                    <Text style={{fontSize: 25}} >{this.props.name}</Text>
                    <Text>{this.props.address}</Text>

                    <Text style={{marginTop: 30, marginBottom: 10,fontSize: 30, fontWeight: "bold", fontStyle: "italic"}}>Available Rewards</Text>
                    <Text> - Save 10 Trips </Text>
                    <Text> - Save a trip with Carpool </Text>
                    <Text> - Save a trip with Public Transport </Text>

                    <Text style={{marginTop: 30,fontSize: 30, fontWeight: "bold", fontStyle: "italic"}}>My Goal:</Text>
                    <Text style={{fontSize: 25}} >{this.props.goal}</Text>
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

export default connect(mapStateToProps)(About);