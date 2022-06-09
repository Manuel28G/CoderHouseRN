import { StyleSheet } from "react-native";

const primaryColor = "#629af5";
export const Style = StyleSheet.create({
  inputHeight: {
    height: 35,
  },
  buttonHeight: {
    height: 35,
    width: 35,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
  },
  listContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    paddingBottom: 50,
    height: "80%",
    borderWidth: 0.01,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  textInput: {
    width: "80%",
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    marginRight: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  itemList: {
    backgroundColor: "#069191",
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
  },
  itemText: {
    color: "#fffff",
    fontSize: 15,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: "#ff4d94",
    padding: 4,
    borderRadius: 25,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  deleteButtonText: {
    color: "white",
  },
});
