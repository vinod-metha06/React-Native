import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductListing from './components/ProductListing/ProductListing';

export default function App() {
  return (
    <View >
      {/* <Text style={{fontSize:20,color:'yellow',}}>Hi,I'm Vinod Metha</Text> */}
      <ProductListing/>
      <StatusBar style={{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
