import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

function CloseModal({ modalVisible, onHandleDelete, itemSelected, title }) {
  //const title = "Are you sure that want to delete this item?";
  const buttonTitle = "Delete";
  return (
    <View
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => null}
    >
      <View style={Style.modalContainer}>
        <View style={Style.modalTitleContainer}>
          <Text style={Style.modalTitle}>Texto</Text>
          <TouchableOpacity
            style={Style.deleteButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={Style.deleteButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={Style.modalTitle}>{title}</Text>
        <Text style={Style.modalMessage}>{itemSelected.title}</Text>
        <Button
          color="#6B4E71"
          title={buttonTitle}
          onPress={() => onHandleDelete(itemSelected.id)}
        />
      </View>
    </View>
  );
}

export default CloseModal;
