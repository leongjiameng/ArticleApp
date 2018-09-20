import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

const articles = {
  article1: {
    title: 'J.K. Rowling',
    author:'Wikipedia',
    content:`'Students’ beliefs that success in science depends on exceptional talent negatively impact their motivationto learn.
    For example, such beliefs have been shown to be a major factor steering students away from
taking science and math courses in high school and college. In the present study, we tested a novel
story-based instruction that models how scientists achieve through failures and struggles. We designed
this instruction to challenge this belief, thereby improving science learning in classroom settings. A
demographically diverse group of 402 9th and 10th grade students read 1 of 3 types of stories about
eminent scientists that described how the scientists (a) struggled intellectually (e.g., made mistakes in
investigating scientific problems'`,
  },
  article2: {
    title: 'George R.R. Martin',
    author:'Wikipedia',
    content:`George Raymond Richard Martin, also known as GRRM, is an American novelist and short-story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. Wikipedia
Born: September 20, 1948 (age 69 years), Bayonne, New Jersey, United States
Spouse: Parris McBride (m. 2011), Gale Burnick (m. 1975–1979)
Short stories: Nightflyers, Sandkings, The Hedge Knight, MORE
Movies: Doorways, Nightflyers, The Sandkings',
`,
  },
}

export default class ArticleScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return {
      title: articles[navigation.getParam('article')].name,
    };
  };

  render() {
    let article = this.props.navigation.getParam('article');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {articles[article].title}
        </Text>
        <Text >
          {articles[article].author}
        </Text>
        <Text >
          {articles[article].content}
        </Text>
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
