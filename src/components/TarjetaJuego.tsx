import { Text, View, StyleSheet } from "react-native";
import { Juego } from "../types/juego";

type TarjetaJuegoProps = {
  juego: Juego;
};

export function TarjetaJuego({ juego }: TarjetaJuegoProps) {
  return (
    <View style={styles.celda}>
      <View style={styles.tarjeta}>
        <Text style={styles.title}>{juego.titulo}</Text>
        <Text style={styles.consola}>{juego.consola}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#ffffff",
  },
  tarjeta: {
    flexGrow: 1,
    backgroundColor: "#171922",
    borderRadius: 14,
    padding: 12,
  },
  consola: {
    fontWeight: "600",
    fontSize: 15,
    color: "#9CA3B4",
  },
  celda: {
    flex: 1,
    maxWidth: "50%",
    padding: 6,
  },
});
