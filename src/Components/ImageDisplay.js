import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDisplay = ({ imageUri }) => {
  return (
    <View style={styles.imageContainer}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default ImageDisplay;
