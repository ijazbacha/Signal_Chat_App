import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";
import AddChatScreen from "../Screens/AddChatScreen";

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
      <Stack.Screen name="AddChat" component={AddChatScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
