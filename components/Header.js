import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./styles";

const Header = ({taskCount}) => {
  return (
    <View>
      <Text style={styles.title}>TodoApp</Text>
      <View style={styles.counter}>
        <Icon name="star" color="green"></Icon>
        <Text style={styles.taskCount}>: {taskCount}</Text>
      </View>
    </View>
  );
};

export default Header;
