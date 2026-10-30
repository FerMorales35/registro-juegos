import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TarjetaJuego } from "./src/components/TarjetaJuego";
import { juegosPrueba } from "./src/data/juegosPrueba";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Biblioteca</Text>
      <TarjetaJuego juego={juegosPrueba[0]} />
      <TarjetaJuego juego={juegosPrueba[1]} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0F14",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
  },
});
