import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import { TarjetaJuego } from "./src/components/TarjetaJuego";
import { juegosPrueba } from "./src/data/juegosPrueba";
import { ordenarPorFecha } from "./src/utils/ordenar";

export default function App() {
  const [titulo, setTitulo] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Biblioteca</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholderTextColor="#9CA3B4"
        placeholder="Título del juego"
      />
      <Text style={styles.title}>Vas a agregar: {titulo}</Text>
      <FlatList
        numColumns={2}
        data={ordenarPorFecha(juegosPrueba)}
        keyExtractor={(juego) => juego.id}
        renderItem={({ item }) => <TarjetaJuego juego={item} />}
        ListEmptyComponent={
          <Text style={styles.title}>No hay juegos cargados</Text>
        }
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
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2D3A",
    backgroundColor: "#171922",
    color: "#E7E9F0",
    paddingHorizontal: 14,
    fontSize: 15,
    marginVertical: 12,
  },
});
