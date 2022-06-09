import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    padding: 50,
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  modalMessage: {
    fontSize: 25,
    color: "#9999ff",
    paddingVertical: 15,
  },
});
