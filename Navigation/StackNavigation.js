import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createNativeStackNavigator();

const globalScreenOption = {
    headerStyle: { backgroundColor: "#2C6BED"},
    headerTitleStyle: {color: "white"},
    headerTitleAlign: 'center',
    headerTintColor: "white"
}

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={globalScreenOption}>
      <Stack.Screen name="LogIn" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
