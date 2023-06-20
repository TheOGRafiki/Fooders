import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import LoginCard from './components/LoginCard';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginCard />
    </View>
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
