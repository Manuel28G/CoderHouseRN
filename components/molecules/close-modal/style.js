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
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  modalSubtitle: {
    fontSize: 20,
    color: "grey",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  modalMessage: {
    fontSize: 25,
    color: "#050001",
    paddingHorizontal: 15,
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: "#ed858e",
  },
  deleteButton: { marginTop: 50, width: "80%" },
  closeButton: {
    backgroundColor: "#ed0505",
    borderWidth: 1,
    borderColor: "black",
    padding: 0,
    height: 25,
    width: 25,
    fontSize: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 10,
  },
});
