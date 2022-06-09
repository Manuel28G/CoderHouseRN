import React, { useState } from "react";
import { Text, View, TouchableOpacity, Switch } from "react-native";
import { Styles } from "./styles";

export default function ListItem({ item, onHandleModal }) {
  const [check, setCheck] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState({});
  return (
    <View style={[Styles.itemList, selectedStyle]}>
      <View style={Styles.titleList}>
        <Switch
          value={check}
          onChange={() => {
            setSelectedStyle(!check ? Styles.itemSelected : null);
            setCheck(!check);
          }}
        />
        <Text style={Styles.itemText}>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onHandleModal(item.id)}
        style={Styles.deleteButton}
      >
        <Text style={Styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
