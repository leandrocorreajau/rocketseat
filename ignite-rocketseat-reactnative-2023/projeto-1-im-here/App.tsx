import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Home />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 25,
  },
});
