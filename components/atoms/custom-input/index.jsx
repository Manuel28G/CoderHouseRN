import React, { useState } from "react";
import { TextInput } from "react-native";
import { Style } from "./style";

function CustomInput({ value, style, onTextChange }) {
  return (
    <TextInput
      style={[Style.inputText, style]}
      placeholder="Add new item"
      value={value}
      onChangeText={(text) => {
        onTextChange(text);
      }}
    />
  );
}

export default CustomInput;
