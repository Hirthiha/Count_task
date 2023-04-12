import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  press: {
    marginTop: 10,
    width: 120,
    height: 40,
    backgroundColor: "#FF5733",
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    padding: 4,
    // marginLeft: 10,
    fontSize: 20,
  },

  text: {
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },

  reset: {
    marginTop: 10,
    width: 60,
    height: 40,
    backgroundColor: "#FF5733",
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    padding: 10,
    marginLeft: 18,
    fontSize: 15,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
  },
});

export default styles;
