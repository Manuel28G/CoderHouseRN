import {
  TextInput,
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import CustomModal from "./components/molecules/modal";
import ListItem from "./components/molecules/list-item";

const placeHolderColor = "#9da3a3";
const buttonColor = "#21807b";
const buttonTitle = "ADD";
const placeHolderText = "new task";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(DATA);

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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeHolderText}
          style={styles.textInput}
          placeholderTextColor={placeHolderColor}
          value={text}
          onChangeText={(text) => {
            handleTextChange(text);
          }}
        />

        <Button
          title={buttonTitle}
          onPress={() => addItem(text)}
          color={buttonColor}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <CustomModal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => null}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Texto</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalTitle}>
              Are you sure that want to delete this item?
            </Text>
            <Text style={styles.modalMessage}>{itemSelected.title}</Text>
            <Button
              color="#6B4E71"
              title="Ok"
              onPress={() => onHandleDelete(itemSelected.id)}
            />
          </View>
        </CustomModal>
      </View>
    </View>
  );
}
