/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  //   Platform,
    StyleSheet,
  //   Text,
  //   View,
    FlatList
  } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import movieService from '../services/movie.service';



export default class GenreList extends Component {
    static navigationOptions = {
        title: 'GenreList'
    }
    constructor(props) {
      super(props);
  
      this.state = {
        movieData :null,
        id: this.props.navigation.state.params.selectedGenre.genreId,
        name: this.props.navigation.state.params.selectedGenre.genreName
      }   
    }

    componentDidMount() {
      this._getMovies(); 
    }

    render() {
      console.log(this.state.movieData)
      return (
        <Container>
          <Content>
            {this.state.movieData != null ? this._renderMovies() : <Text>...Just a few more seconds</Text>}
          </Content>
        </Container>
      );
    }
    _getMovies() {
      movieService.getGenresById(this.state.id)
      .then(results =>{
        this.setState({movieData: results});
      })
      .catch(error => {
        console.log('Something went wrong!');
      })
    }
    _renderMovies() {
      return (<FlatList
        data = {this.state.movieData}
        keyExtractor = {(item, index) => item.title}
        renderItem={this._renderMovieItem}
      />);
    }
    _renderMovieItem = ({item}) => {
      return (<ListItem>
      <Text style={styles.item}>
      {item.getTitle()}
      </Text>
      </ListItem>
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