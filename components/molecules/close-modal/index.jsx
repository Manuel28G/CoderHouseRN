import React from "react";
import { View, Text, TouchableOpacity, Button, Modal } from "react-native";
import { Style } from "./style";

function CloseModal({
  modalVisible,
  onHandleDelete,
  itemSelected,
  subtitle,
  title,
  hideModal,
}) {
  const buttonTitle = "Delete";
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => null}
    >
      <View style={Style.modalContainer}>
        <View style={Style.modalTitleContainer}>
          <Text style={Style.modalTitle}>{title}</Text>
          <TouchableOpacity
            style={Style.closeButton}
            onPress={() => hideModal()}
          >
            <Text style={Style.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={Style.modalSubtitle}>{subtitle}</Text>
        <Text style={Style.modalMessage}>{itemSelected.title}</Text>
        <View style={Style.deleteButton}>
          <Button
            color="#ff4d94"
            title={buttonTitle}
            onPress={() => onHandleDelete(itemSelected.id)}
          />
        </View>
      </View>
    </Modal>
  );
}

export default CloseModal;
