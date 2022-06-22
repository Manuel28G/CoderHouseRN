import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

function CategoryItem({ item, onSelected }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CategoryItem;
