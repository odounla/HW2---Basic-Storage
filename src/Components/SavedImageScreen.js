// src/Components/SavedImageScreen.js
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

const SavedImageScreen = ({ route }) => {
  const { imageUri } = route.params;
  const { isDarkMode } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#E0EAFC" },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? "#FFF" : "#444" }]}>
        Your Saved Image
      </Text>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0EAFC",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
});

export default SavedImageScreen;
