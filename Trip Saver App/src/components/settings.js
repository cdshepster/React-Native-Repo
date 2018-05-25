import React from "react";
import { StatusBar, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
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
import {updateSettings} from "../actions/screen-tracking";



class Settings extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    state = {
        isModalVisible: false,
        myName: this.props.name,
        myAddress: this.props.address,
        myGoal: this.props.goal
    };

    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    updateDetails = () => {
        this.props.dispatchUpdateSettings(this.state.myName,this.state.myAddress,this.state.myGoal)
        alert("Updated")
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
                    <Right />
                </Header>
                <Content padder style={{alignSelf: "center"}}>
                    <Text style={{ fontSize: 15, marginTop: 15, fontWeight: 'bold' }}>Name</Text><TextInput
                        style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}
                        defaultValue={this.props.name}
                        onChangeText={(myName) => this.setState({ myName: myName })} //note this shortcut code
                    />

                    <Text style={{ fontSize: 15, marginTop: 15, fontWeight: 'bold' }}>Address</Text><TextInput
                        style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}
                        defaultValue={this.props.address}
                        onChangeText={(myAddress) => this.setState({ myAddress: myAddress })} //note this shortcut code
                    />

                    <Text style={{ fontSize: 15, marginTop: 15, fontWeight: 'bold'}}>Goal</Text><TextInput
                        style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}
                        defaultValue={this.props.goal}
                        onChangeText={(myGoal) => this.setState({ myGoal: myGoal })} //note this shortcut code
                    />

                    <Button
                            transparent
                            onPress={this.updateDetails}
                            style={{alignSelf:"center", justifyContent: "center", alignItems: "center" }}
                        >
                            <Text> Update </Text>
                        </Button>
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
function mapDispatchToProps(dispatch) {
    return {
        dispatchUpdateSettings: (name, address, goal) => dispatch(updateSettings(name, address, goal)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);