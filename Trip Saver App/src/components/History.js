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


class History extends React.Component {

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
                        <Title>History</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 20,fontWeight: 'bold'}}>Trips/Day</Text>
                    <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 14, marginBottom: 10}}>{this.props.count}</Text>
                    <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 20,fontWeight: 'bold'}}>Trips/Week</Text>
                    <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 14, marginBottom: 10}}>{this.props.count}</Text>
                   <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 20,fontWeight: 'bold'}}>Trips/Month</Text>
                   <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 14, marginBottom: 10}}>{this.props.count}</Text>
                   <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 20,fontWeight: 'bold'}}>Trips/Year</Text>
                   <Text style={{alignItems:'center', alignSelf: 'center', fontSize: 14, marginBottom: 10}}>{this.props.count}</Text>

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
    count:state.count   
 };
}

export default connect(mapStateToProps)(History);