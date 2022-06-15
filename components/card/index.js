import React from "react";
import { View } from "react-native";
import { styles } from "./style";

export default function Card({ style, children }) {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
}
