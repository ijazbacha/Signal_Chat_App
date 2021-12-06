import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const RegisterScreen = ({ navigation, ...props }) => {
  const [show, setShow] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const registerHandler = () => {
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.providerData({
          displayName: fullName,
          photoUrl:
            imageUrl ||
            "https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png",
        });
    
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      navigation.navigate("Login")
  };

  return (
    <View style={styles.RegisterContainer}>
      <Text h3 style={{ marginVertical: 20 }}>
        Create a Signal account
      </Text>
      <View style={{ width: "90%" }}>
        <Input
          placeholder="Full Name"
          autoFocus
          leftIcon={
            <Icon
              name="person-outline"
              size={22}
              type="ionicon"
              color="black"
            />
          }
          value={fullName}
          onChangeText={(value) => setFullName(value)}
        />

        <Input
          placeholder="Email"
          leftIcon={
            <Icon name="mail-outline" size={22} type="ionicon" color="black" />
          }
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <Input
          placeholder="Password"
          secureTextEntry={show}
          leftIcon={
            <Icon
              name="lock-closed-outline"
              size={22}
              type="ionicon"
              color="black"
            />
          }
          rightIcon={
            <Icon
              name={show ? "eye-off-outline" : "eye-outline"}
              size={22}
              type="ionicon"
              color="black"
              onPress={() => setShow(!show)}
            />
          }
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <Input
          placeholder="Profile Picture Url (optional)"
          leftIcon={
            <Icon
              name="person-circle-outline"
              size={25}
              type="ionicon"
              color="black"
            />
          }
          value={imageUrl}
          onChangeText={(value) => setImageUrl(value)}
          onSubmitEditing={registerHandler}
        />
      </View>

      <Button
        title="Register"
        disabled={fullName && email && password ? false : true}
        onPress={registerHandler}
        buttonStyle={{ backgroundColor: "#2C6BED" }}
        containerStyle={{
          width: "90%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        }}
      />
      <View
        style={{
          width: "95%",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>Already have an account?</Text>
        <Button
          title="Login"
          type="clear"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default RegisterScreen;
