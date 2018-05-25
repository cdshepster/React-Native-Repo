import React, { Component } from 'react';
import { Alert, StatusBar, TouchableOpacity, TextInput, View, StyleSheet, FlatList, Image } from "react-native";
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
    Input,
    Label
} from "native-base";
import Modal from "react-native-modal";
import { connect } from "react-redux"
import * as COLOR from "../config/colors";
import { bindActionCreators } from "redux";
import moment from 'moment'
import { addTask, setFirstTrip, setFirstPublic, setFirstCarpool } from "../actions/screen-tracking";


class HomeScreen extends Component<{}> {

    state = {
        isModalVisible: false,
        selected1: null,
        selectedType: null,
        tripCount: 1,
        date: '04-22-18',
    };

    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible, selected1: null, tripCount: 1 });
    }

    _addNewTask = () => {

        changed = false

        item = {
            type: this.state.selected1,
            tripCount: this.state.tripCount,
            image: require('../assets/IMG_3977.png'),
            date: moment().format('L'),
        }
        
        if(this.props.firstTrip == false){
            if(this.props.tripsSaved + parseInt(item.tripCount) >= 10){
                Alert.alert("Reward", "You unlocked a reward for saving 10 trips", [
                    { text: "OK", onPress: () => { this.setState({ isModalVisible: false }) }   } 
                  ])
                this.props.dispatchSetFirstTrip()
                changed = true
            }
        }
        
        if(this.props.firstCarpool == false){
            if(item.type == 'Carpool'){
                Alert.alert("Reward", "You unlocked a reward for your first Carpool Trip", [
                    { text: "OK", onPress: () => { this.setState({ isModalVisible: false }) }   } 
                  ])
                this.props.dispatchSetFirstCarpool()
                changed = true
            }
        }
        
        if(this.props.firstPublicTrans == false){
            if(item.type == 'Public Transport'){
                Alert.alert("Reward", "You unlocked a reward for your first Public Transport Trip", [
                    { text: "OK", onPress: () => { this.setState({ isModalVisible: false }) }   } 
                ])
                this.props.dispatchSetFirstPublicTrans()
                changed = true
            }
        }
        
        if(!changed)
            this.setState({
                isModalVisible: false
            });

        this.props.dispatchAddTask(item)
    }

    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    renderItem({ item, index }) {

        return <View style={{
            flex: 1,
            margin: 5,
            minWidth: 170,
            maxWidth: 623,
            height: 304,
            maxHeight: 304,
            backgroundColor: '#CCC',
        }} >
            <Image source={item.image} style={{
                width: 200,
                height: 200,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 25,

            }} />
            <Text> Trip Type: {item.tripType} </Text>
            <Text> Trip Date: {item.date} </Text>
            <Text> Trips Saved: {item.tripCount} </Text>


        </View>
    }
    renderList(items) {
        return <FlatList
            contentContainerStyle={styles.list}
            data={items}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
        />
    }

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
                        <Title>Activity</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={this._toggleModal}
                        >
                            <Icon name="add" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.modal}>
                            <Card style={{ flex: 1 }}>
                                <CardItem>
                                    <Body>
                                        <Picker
                                            placeholder="Select Type..."
                                            iosHeader="Select Type"
                                            mode="dropdown"

                                            onValueChange={this.onValueChange.bind(this)}
                                        >
                                            <Item label="Carpool" value="Carpool" />
                                            <Item label="Active" value="Active" />
                                            <Item label="Public Transport" value="Public Transport" />
                                            <Item label="Chain" value="Chain" />
                                        </Picker>

                                        <Text>Type: {this.state.selected1} </Text>

                                        {this.state.selected1 == 'Chain' ?
                                            <View style={{ width: 150 }}>
                                                <Text style={{fontSize: 8, marginTop:15}}>How many trips did you save?</Text><TextInput
                                                    style={{ width: 200, borderBottomColor: 'black', borderBottomWidth:  1 }}
                                                    defaultValue=''
                                                    onChangeText={(tripCount) => this.setState({ tripCount: tripCount })} //note this shortcut code
                                                />
                                            </View> : <Text></Text>}

                                    </Body>
                                </CardItem>
                            </Card>
                            <View style={styles.container}>
                                <Button half rounded danger style={{ flex: .5, marginTop: 10 }} onPress={this._toggleModal}>
                                    <Text style={{ marginLeft: 42 }}>Cancel</Text>
                                </Button>
                                <Button half rounded success style={{ flex: .5, marginTop: 10 }} onPress={this._addNewTask} >
                                    <Text style={{ marginLeft: 50 }} >Add</Text>
                                </Button>
                            </View>
                        </View>
                    </Modal>
                    <Text>Trips Saved: {this.props.tripsSaved}</Text>
                    {this.renderList(this.props.tasks)}
                    

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

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddTask: (item) => dispatch(addTask(item)),
        dispatchSetFirstTrip: () => dispatch(setFirstTrip()),
        dispatchSetFirstCarpool: () => dispatch(setFirstCarpool()),
        dispatchSetFirstPublicTrans: () => dispatch(setFirstPublic()),
    };
}
const mapStateToProps = (state) => {
    return {
        tasks: state.TASKS,
        tripsSaved: state.count,
        firstTrip: state.firstTrip,
        firstCarpool: state.firstCarpool,
        firstPublicTrans: state.firstPublicTrans
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);