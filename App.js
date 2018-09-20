import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import AuthorScreen from './AuthorScreen';
import ArticleScreen from './ArticleScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Author: {
    screen: AuthorScreen
  },
  Article: {
    screen: ArticleScreen
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
