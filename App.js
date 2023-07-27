import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//NAVEGADORES
import BottomNavigation from './Navigators/BottomNavigator';
import StackNavigation from './Navigators/StackNavigator';
import MainNavigation from './Navigators/MainNavigator';

export default function App() {
  return (
   <MainNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
