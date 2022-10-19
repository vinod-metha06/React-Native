import { StyleSheet, View, Text, FlatList, Button, Image } from "react-native";
import Price from "./price";
import Rating from "./rating";

function ProductItem(props) {
  const { item } = props;
  const { id, product_name, price, rating, product_image, likes } = item;
  console.log(rating);

  return (
    <View style={styles.productItem}>
      <View style={styles.sectionImage}>
        <Image style={styles.productImgmage} source={{ uri: product_image }} />
      </View>

      <View style={styles.sectionDesc}>
        <Text>{product_name}</Text>
        <Price price={price} />
        <Rating rating={rating} />
      </View>

      <View style={styles.sectionActions}>
        <Button
          style={styles.bt}
          onPress={() => {
            alert("Hello");
          }}
          title="Buy"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    //   flex: 1,
    flexDirection: "row",
    height: 150,
    width: "100%",
    padding: 20,
    marginTop: 8,
    marginBottom: 2,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 20,
    backgroundColor: "#E6E6FA",
    alignContent: "space-between",
    // alignItems: "center",
    // justifyContent: "center",
  },
  productImgmage: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 1,
    width: 75,
    height: 75,
  },

  sectionImage: {
    flexBasis: 85,
    padding: 8,
  },

  sectionDesc: {
    flexBasis: "auto",
    padding: 8,
    width:120
  },

  sectionActions: {
    flexBasis: 100,
    padding: 8,
  },

  bt: {
    height: 40,
    width: 20,
    padding: 4,
    margin: 4,
    borderRadius: 80,
  },
});

export default ProductItem;
