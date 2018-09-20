import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

const authors = {
  jkrowling: {
    name: 'J.K. Rowling',
    country:'United Kingdom',
    image: require('./img/jk.jpg'),
  },
  george: {
    name: 'George R.R. Martin',
    country:'United State of America',
    image: require('./img/george.jpg'),
  },
  najib: {
    name: 'Najib',
    country:'Malaysia',
    image: require('./img/najib.jpg'),
  },
}

export default class AuthorScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return {
      title: authors[navigation.getParam('author')].name,
    };
  };

  render() {
    let author = this.props.navigation.getParam('author');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {authors[author].name}
        </Text>
        <Text >
          {authors[author].country}
        </Text>
        <Image style={styles.image}
          source={authors[author].image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  image: {
      width: 360,
      height: 360,
  },
});
