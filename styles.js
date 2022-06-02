import { StyleSheet } from "react-native";

const primaryColor = "#629af5";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
  },
  addButton: {},
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    width: "80%",
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    marginRight: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
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
