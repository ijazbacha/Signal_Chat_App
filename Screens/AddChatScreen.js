import React, { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { db } from "../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
    });
  }, [navigation]);

  const createChat = async () => {
    console.log(chatName);

    try {
      const docRef = await addDoc(collection(db, "chats"), {
        chatName: chatName,
      }).then(() =>{
          navigation.goBack()
      })
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Input
        placeholder="Enter a chat name"
        autoFocus
        onEndEditing={createChat}
        value={chatName}
        onChangeText={(value) => setChatName(value)}
        leftIcon={
          <Icon
            name="chatbubbles-outline"
            size={22}
            type="ionicon"
            color="black"
          />
        }
      />
      <Button
        title="Create new Chat"
        onPress={createChat}
        disabled={chatName ? false : true}
        buttonStyle={{ backgroundColor: "#2C6BED" }}
        containerStyle={{
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
    </View>
  );
};

export default AddChatScreen;
