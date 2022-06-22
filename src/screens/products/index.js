import React from "react";
import { View, FlatList } from "react-native";
import { ProductItem } from "../../components";
import { products } from "../../data/products";
import { styles } from "./styles";

const ProductScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const filterProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      product: item,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductScreen;
