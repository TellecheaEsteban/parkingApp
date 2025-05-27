import React from "react";
import { ThemedText } from "../ThemedText";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,

  },
});

function News() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Noticias</ThemedText>
      <ThemedView style={styles.slider}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("@/assets/images/cars.jpg")}
        />
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("@/assets/images/cars.jpg")}
        />
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("@/assets/images/cars.jpg")}
        />
      </ThemedView>
    </ThemedView>
  );
}

export default News;
