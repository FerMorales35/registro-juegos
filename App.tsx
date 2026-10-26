import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Biblioteca</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#0E0F14',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#f0e7e8',
    fontSize: 28
  }
});



