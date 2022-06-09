import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  itemList: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleList: {
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
    marginRight: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 10,
  },
  itemSelected: {
    backgroundColor: "#e6e6e6",
  },
});
