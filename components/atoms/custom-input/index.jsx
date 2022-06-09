import React, { useState } from "react";
import { TextInput } from "react-native";
import { Style } from "./style";

function CustomInput({ value, style, onTextChange }) {
  const [inputValue, setInputValue] = useState(value);
  return (
    <TextInput
      style={[Style.inputText, style]}
      placeholder="Add new item"
      value={inputValue}
      onChangeText={(text) => {
        onTextChange(text);
      }}
    />
  );
}

export default CustomInput;
