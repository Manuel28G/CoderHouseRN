import React, { useState } from "react";
import { View } from "react-native";
import ListItem from "../../components/molecules/Item-list";
import CustomInput from "../../components/atoms/custom-input";
import CircularButton from "../../components/atoms/circular-button";
import { Style } from "./style";

function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleTextChange = (text) => {
    setText(text);
  };

  const addItem = (text) => {
    if (text.length > 0) {
      setList((currentList) => [
        ...currentList,
        { id: Math.random().toString(), title: text },
      ]);
      setText("");
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onHandleModal={(id) => {
        onHandleModal(id);
      }}
    />
  );

  const onHandleDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setModalVisible(!modalVisible);
  };

  const onHandleModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };
  return (
    <View style={Style.inputContainer}>
      <CustomInput style={Style.inputHeight} />
      <CircularButton
        onPress={() => {}}
        buttonText="+"
        style={Style.buttonHeight}
      />
    </View>
  );
}

export default Home;
