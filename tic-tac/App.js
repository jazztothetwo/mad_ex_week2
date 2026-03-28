import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const plays = ["O", "", "X", "X", "", "O", "", "X", ""];

const Cell = ({ play }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.Text}>{play}</Text>
    </View>
  )
}




export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.board}>
          {plays.map((p, i) => (
            <Cell key = {i} play = {p} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  board: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 30,
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#090",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
})