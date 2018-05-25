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

export default class Genre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genreData: null,
      movieData :null
    }   
  }
  static navigationOptions = {
    title: 'Genres'
}

  componentDidMount() {
    this._getMovies(); 
    this._getGenres();
  }

  render() {
    return (
        <Container>
          <Content>
            {this.state.genreData != null ? this._renderGenres() : <Text>...Just a few more seconds</Text>}
          </Content>
        </Container>
      
      // <View style={styles.container}>
      //     <Text style={styles.title}>
      //       The Incredible Movie List
      //     </Text>
      //     {this.state.data != null ? this._renderMovies() : <Text>...Just a few more seconds</Text>}
      // </View>
    );
  }

  _getMovies() {
    movieService.getMovies()
    .then(results =>{
      this.setState({movieData: results});
    })
    .catch(error => {
      console.log('Something went wrong!');
    })
  }
  _getGenres() {
    movieService.getGenres()
    .then(results =>{
      this.setState({genreData: results});
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
  _renderGenres() {
    return (<FlatList
      data = {this.state.genreData}
      keyExtractor = {(item, index) => item.genreName}
      renderItem={this._renderGenreItem}
    />);
  }

  _renderMovieItem = ({item}) => {
    return (<ListItem button onPress={()=>this.props.navigation.navigate('GenreList', {custom: 'HOME'})}>
    <Text style={styles.item}>
    {item.getTitle()} {item.getYearReleased()}
    </Text>
    </ListItem>
    );
  }
_renderGenreItem = ({item}) => {
  return (<ListItem button onPress={()=>this.props.navigation.navigate('GenreListView', {selectedGenre: item})}>
  <Text style={styles.item}>
  {item.getGenre()}
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop:40
  },
  item: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
