import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import { auth } from "../Firebase/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation, ...props }) => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signInHandler = () => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error)
    );
  };

  return (
    <View style={styles.LoginContainer}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "http://assets.stickpng.com/thumbs/6002f8aa51c2ec00048c6c68.png",
        }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />

      <View style={{ width: "90%" }}>
        <Input
          placeholder="Email"
          autoFocus
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
          onSubmitEditing={signInHandler}
        />
      </View>

      <Button
        title="Login"
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
        disabled={email && password ? false : true}
        onPress={signInHandler}
      />

      <View
        style={{
          width: "95%",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>Don't have an account?</Text>
        <Button
          title="Register"
          type="clear"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
