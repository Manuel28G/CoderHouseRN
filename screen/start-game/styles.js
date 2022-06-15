import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#dae6f1",
    alignItems: "center",
  },
  title: {
    color: "#212121",
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputText: {
    fontSize: 16,
    textAlign: "center",
    height: 25,
    margin: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
