import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { styles } from "../category-item/styles";
import { colors } from "../../constants/themes/colors";

function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View styles={styles.headerContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View styles={styles.detailContainer}>
        <Text style={styles.detailsQuantity}>{item.quantity}</Text>
        <Text style={styles.detailsPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <IonicIcons name="trash" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

export default CartItem;
