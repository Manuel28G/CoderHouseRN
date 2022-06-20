import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Button
        title="Go to Product Details Screen"
        onPress={() => navigation.navigate("ProductDetail")}
      />
    </View>
  );
};

export default ProductScreen;
