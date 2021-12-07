import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { auth } from "../Firebase/Firebase";

const photoURL = "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5"

const CustomListItem = ({ id, chatName, ...props}) => {
  return (
    <ListItem key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          // uri: auth?.currentUser?.photoURL,
          uri: photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test 
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
