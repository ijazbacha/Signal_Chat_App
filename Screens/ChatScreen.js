import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { View, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      // headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
            }}
          />
          <Text style={{ marginLeft: 10, fontWeight: "700", color: "white" }}>
            {route.params.chatName} Chat
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            width: 70,
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="videocam" size={24} type="ionicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="call" size={24} type="ionicon" color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    console.log("====================================");
    console.log("hahahaha");
    console.log("====================================");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={90}
        style={styles.Container}
      >
        <>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 15}}>
            <View style={styles.receiver}>
              <Avatar
                position="absolute"
                bottom={-15}
                right={-5}
                size={30}
                rounded
                source={{
                  uri: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
                }}
              />
              <Text style={styles.receiverText}>hi this is a test</Text>
            </View>

            <View style={styles.sender}>
              <Avatar
                position="absolute"
                bottom={-15}
                left={-5}
                size={30}
                rounded
                source={{
                  uri: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
                }}
              />
              <Text style={styles.senderText}>hi this is a test</Text>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Signal Message"
              value={input}
              onChangeText={(text) => setInput(text)}
              style={styles.textInput}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Icon name="send" type="ionicon" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    flex: 1,
    backgroundColor: "#ECECEC",
    borderColor: "transparent",
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 30,
    color: "gray",
  },
  receiver: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    maxWidth: "80%",
    position: "relative",
    margin: 15,
  },
  receiverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  senderText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    // marginBottom: 15,
  },
});

export default ChatScreen;
