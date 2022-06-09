import React, { useState } from "react";
import { TextInput } from "react-native";
import { Style } from "./style";

function CustomInput({ style }) {
  const [inputValue, setInputValue] = useState();
  return (
    <TextInput
      style={[Style.inputText, style]}
      placeholder="Add new item"
      value={inputValue}
    />
  );
}

export default CustomInput;
