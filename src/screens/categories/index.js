import React from "react";
import { View, FlatList } from "react-native";
import CategoryItem from "../../components/category-item";
import { categories } from "../../data/categories";
import { styles } from "./styles";

const CategoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelected={() =>
        navigation.navigate("Product", {
          categoryId: item.id,
          title: item.title,
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default CategoryScreen;
