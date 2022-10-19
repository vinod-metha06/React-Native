import { StyleSheet, View, Text, FlatList, Button, Image } from "react-native";

export default function Rating(props) {
  const { rating } = props;

  const style = StyleSheet.create({
    rating: {
      flexDirection: "row",
    },
  });

  return (
    <View style={style.rating}>
      {Array(rating)
        .fill("")
        .map((item, index) => {
          return <Text key={index}>⭐</Text>;
        })}
    </View>
  );
}
