import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function ListItem({ item, onHandleModal }) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => onHandleModal(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
