import React from "react";
import { ThemedText } from "../ThemedText";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import Slider from "./Slider";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom:10,
    marginLeft:20,
  },
});

function News() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Noticias</ThemedText>
      <Slider/>
    </ThemedView>
  );
}

export default News;
