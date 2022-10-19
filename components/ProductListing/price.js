import { StyleSheet, View, Text, FlatList, Button, Image } from "react-native";

const currency = "$";

export default function Price(props) {
  const { price } = props;
  return (
    <Text>
      {currency}
      {price}
    </Text>
  );
}
