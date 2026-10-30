import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TarjetaJuego } from "./src/components/TarjetaJuego";
import { juegosPrueba } from "./src/data/juegosPrueba";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Biblioteca</Text>
      <FlatList
        numColumns={2}
        data={juegosPrueba}
        keyExtractor={(juego) => juego.id}
        renderItem={({ item }) => <TarjetaJuego juego={item} />}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0F14",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
  },
});
