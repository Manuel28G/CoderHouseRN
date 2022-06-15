import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
