import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { auth } from "../Firebase/Firebase";

// photoURL = "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/11/avatar-generators.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5"

const CustomListItem = () => {
  return (
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{
          uri: auth?.currentUser?.photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title>ijaz Bacha</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
