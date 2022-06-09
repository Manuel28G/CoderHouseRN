import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Button } from "react-native";
import ListItem from "../../components/molecules/Item-list";
import CustomInput from "../../components/atoms/custom-input";
import CircularButton from "../../components/atoms/circular-button";
import CloseModal from "../../components/molecules/close-modal";
import { Style } from "./styles";

function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const deleteSubtitle = "Are you sure that you want to delete this item?";
  const deleteTitle = "Item delete";

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
    <View>
      <View style={Style.inputContainer}>
        <CustomInput
          value={text}
          style={Style.inputHeight}
          onTextChange={(text) => {
            handleTextChange(text);
          }}
        />
        <CircularButton
          onPress={() => {
            addItem(text);
          }}
          buttonText="+"
          style={Style.buttonHeight}
        />
      </View>

      <View style={Style.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <CloseModal
          modalVisible={modalVisible}
          hideModal={() => setModalVisible(!modalVisible)}
          onHandleDelete={(id) => {
            onHandleDelete(id);
          }}
          itemSelected={itemSelected}
          title={deleteTitle}
          subtitle={deleteSubtitle}
        />
      </View>
    </View>
  );
}

export default Home;
