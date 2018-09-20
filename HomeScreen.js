import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Navigation Demo',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Home
        </Text>
        <View style={styles.button}>
          <Button
            title="J.K. Rowling"
            onPress={() => {this.props.navigation.navigate('Author', {
              author: 'jkrowling',
            })}}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="George R.R. Martin"
            onPress={() => {this.props.navigation.navigate('Author', {
              author: 'george',
            })}}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Najib"
            onPress={() => {this.props.navigation.navigate('Author', {
              author: 'najib',
            })}}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Article 1"
            onPress={() => {this.props.navigation.navigate('Article', {
              article: 'article1',
            })}}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Article 2"
            onPress={() => {this.props.navigation.navigate('Article', {
              article: 'article2',
            })}}
          />
        </View>

      </View>
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
    margin: 20,
  },
  button: {
      margin: 10,
  }
});
