import React from "react";
import { StatusBar, TouchableOpacity, View, StyleSheet, ImageBackground } from "react-native";
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
    Item,
} from "native-base";
import { connect } from 'react-redux'
import Modal from "react-native-modal";


class Rewards extends React.Component<{}> {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

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
                        <Title>Rewards</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/1st.png')} style={{
                            width: 100,
                            height: 100,
                            marginTop: 50,
                        }}>
                            {this.props.firstTrip == true ?
                            <View style={{ width: 100,
                            height: 100,backgroundColor: 'rgba(0,255,0,0.1)' }} /> : 
                            <View style={{ width: 100,
                                height: 100,backgroundColor: 'rgba(255,0,0,0.1)' }} />
                            }
                        </ImageBackground>
                        <Text>
                            Save 10 Trips
                        </Text>

                        <ImageBackground source={require('../assets/group.png')} style={{
                             width: 100,
                            height: 100,
                            marginTop: 50,
                        }}>
                        {this.props.firstCarpool == true ?
                            <View style={{ width: 100,
                            height: 100,backgroundColor: 'rgba(0,255,0,0.1)' }} /> : 
                            <View style={{ width: 100,
                                height: 100,backgroundColor: 'rgba(255,0,0,0.1)' }} />
                            }
                        </ImageBackground>
                        <Text>
                        Save a trip with Carpool                        
                        </Text>

                        <ImageBackground source={require('../assets/bus.png')} style={{
                           width: 100,
                           height: 100,
                            marginTop: 50,
                        }}>
                            {this.props.firstPublicTrans == true ?
                            <View style={{ width: 100,
                            height: 100,backgroundColor: 'rgba(0,255,0,0.1)' }} /> : 
                            <View style={{ width: 100,
                                height: 100,backgroundColor: 'rgba(255,0,0,0.1)' }} />
                            }
                        </ImageBackground>
                        <Text>
                            Save a trip with Public Transport
                        </Text>
                    </View>
                </Content >
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    }
});

const mapStateToProps = (state) => {
    return {
        firstTrip: state.firstTrip,
        firstCarpool: state.firstCarpool,
        firstPublicTrans: state.firstPublicTrans
    };
}

export default connect(mapStateToProps)(Rewards);