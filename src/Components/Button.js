import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text styel={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    olor: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
