import React, { useLayoutEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { SafeAreaView } from "react-native";
import CustomListItem from "../Components/CustomListItem";
import { Avatar, Icon } from "react-native-elements";

const HomeScreen = ({ navigation, ...props }) => {
  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "white",
      headerLeft: () => (
        <TouchableOpacity onPress={logOutHandler} activeOpacity={0.5}>
          <View style={{ marginLeft: 10 }}>
            <Avatar
              rounded
              source={{
                uri: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
              }}
            />
          </View>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <View style={{ flexDirection:"row", marginRight:10, width:60, justifyContent:"space-between"}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              name="camera-outline"
              type="ionicon"
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              name="create-outline"
              type="ionicon"
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
