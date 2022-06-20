import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen</Text>
      <Button
        title="Go to Products Screen"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};
export default CategoryScreen;
