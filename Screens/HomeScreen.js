import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth, db } from "../Firebase/Firebase";
import { SafeAreaView } from "react-native";
import CustomListItem from "../Components/CustomListItem";
import { Avatar, Icon } from "react-native-elements";
import { collection, getDocs } from "firebase/firestore";

const HomeScreen = ({ navigation, ...props }) => {
  const [chats, setChats] = useState([]);

  useEffect( async () => {
    
    const querySnapshot = await getDocs(collection(db, "chats"));
    // console.log('====================================');
    // console.log("querySnapshot", querySnapshot);
    // console.log('====================================');
    
    setChats(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
    return querySnapshot;
  }, []);

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
        <View
          style={{
            flexDirection: "row",
            marginRight: 10,
            width: 60,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="camera-outline" type="ionicon" color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddChat")}
          >
            <Icon name="create-outline" type="ionicon" color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  console.log("====================================");
  console.log("chats", chats);
  console.log("====================================");

  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%"}}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
