import React from "react";
import { Pressable, Text } from "react-native";
import { Style } from "./style";

function CircularButton({ onPress, buttonText, style }) {
  return (
    <Pressable onPress={onPress} style={[Style.circularButton, style]}>
      <Text style={Style.buttonText}>{buttonText}</Text>
    </Pressable>
  );
}

export default CircularButton;
