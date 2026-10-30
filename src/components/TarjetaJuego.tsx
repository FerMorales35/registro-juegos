import { Text, View, StyleSheet } from "react-native";
import { Juego } from "../types/juego";

type TarjetaJuegoProps = {
  juego: Juego;
};

export function TarjetaJuego({ juego }: TarjetaJuegoProps) {
  return (
    <View>
      <Text style={styles.text}>{juego.titulo}</Text>
      <Text style={styles.text}>{juego.consola}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
  },
});
