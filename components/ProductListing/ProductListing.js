import { StyleSheet,View, Text, FlatList, Button } from "react-native";

function ProductItem(props) {

  const { item} = props;
  const { name, rating } = item;

  return (
    <View style={styles.container}>
      <Text>{name}{"\n"}{`rating: ${rating}`}</Text>
      <Button style={{height:20}} onPress={()=>{alert("Hello")}} title="Buy"></Button>
      
    </View>
  );
}

function ProductListing() {
  const products = [{ name: "Macbook", rating: 4, id: 1 },{ name: "Dell", rating: 5, id: 2 },{ name: "HP", rating: 4, id: 3 },{ name: "Dell", rating: 5, id: 4 },{ name: "HP", rating: 4, id: 5 },{ name: "Dell", rating: 5, id: 6 },{ name: "HP", rating: 4, id: 7 }];
  return (
    <View>
      <FlatList
      bounces={true}
        data={products}
        renderItem={ProductItem}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      flexDirection:"column",
      height:150,
      width:350,
      padding:20,
      margin:20,
      borderRadius:20,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bt:{
        height:40,
        width:200,
        padding:4,
        margin:4,
        borderRadius:80,
    }
  });

export default ProductListing;
