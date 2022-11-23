import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, ImageBackground, Image} from 'react-native';





export default function App() {
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <StatusBar style="auto" />
      <View style={{flex: 1}}>
          <Image source={require('./assets/corvette-logo.png')} style={styles.image}></Image>
        </View>
        <View style={{flex: 1}}>        
          <Text>Merry Christmas Mom!</Text>
          <Text>You think you know your Corvettes?</Text>
        </View>
        <View style={{flex: 1.3}}>
          <Button
            style={styles.button}
            title="Take the Quiz"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'Black',
  }
});
