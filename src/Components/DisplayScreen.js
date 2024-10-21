import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const DisplayScreen = ({ route }) => {
  const { savedImageUri } = route.params; // Get the image URI from navigation params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uploaded Media</Text>
      {savedImageUri ? (
        <Image source={{ uri: savedImageUri }} style={styles.image} />
      ) : (
        <Text>No media to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0EAFC",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#444",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
});

export default DisplayScreen;
