import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import ProductItem from "./ProductItem";

import axios from "axios";

function ProductListing() {
  const [data, setData] = useState([]);

  useEffect(function () {
    axios.get("http://localhost:3000/products").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <View>
      <FlatList
        bounces={true}
        data={data}
        renderItem={ProductItem}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

export default ProductListing;
