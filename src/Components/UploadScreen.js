// src/Components/UploadScreen.js
import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useTheme } from "../context/ThemeContext";
import { Feather } from "@expo/vector-icons";

const UploadScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scaleValue] = useState(new Animated.Value(1));
  const { isDarkMode, toggleTheme } = useTheme();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (selectedImage) {
      const directory = `${FileSystem.documentDirectory}CustomImages/`;
      const fileName = selectedImage.split("/").pop();
      const newPath = directory + fileName;

      try {
        // Ensure the directory exists
        const dirInfo = await FileSystem.getInfoAsync(directory);
        if (!dirInfo.exists) {
          await FileSystem.makeDirectoryAsync(directory, {
            intermediates: true,
          });
        }

        // Save the image
        await FileSystem.copyAsync({
          from: selectedImage,
          to: newPath,
        });

        // Show a success message
        Alert.alert("Success", "Great!! Image was saved successfully!");

        // Navigate to the SavedImageScreen to show the saved image
        navigation.navigate("SavedImage", { imageUri: newPath });
      } catch (error) {
        Alert.alert("Error", "Be Careful! Failed to save the image.");
      }
    }
  };

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#E0EAFC" },
      ]}
    >
      {/* Toggle Dark/Light Mode Icon */}
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Feather
          name={isDarkMode ? "moon" : "sun"} // Moon for dark mode, sun for light mode
          size={35}
          color={isDarkMode ? "#FFF" : "#000"}
        />
      </TouchableOpacity>

      <Text style={[styles.title, { color: isDarkMode ? "#FFF" : "#444" }]}>
        Upload an Image
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={pickImage}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
      </Animated.View>

      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          <TouchableOpacity style={styles.saveButton} onPress={saveImage}>
            <Text style={styles.saveButtonText}>Save Image</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E0EAFC",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#444",
  },
  uploadButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  themeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default UploadScreen;
