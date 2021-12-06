import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";

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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
