import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadScreen from "./src/Components/UploadScreen";
import SavedImageScreen from "./src/Components/SavedImageScreen";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Upload">
          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="SavedImage" component={SavedImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
