//import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
//import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import navigation from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";
//import styles from "../components/genStyle/styles";

class LiveEventScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CreateEvent")}
        >
          <Icon.Ionicons
            style={styles.create}
            name={"md-add-circle"}
            size={40}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

LiveEventScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  create: {
    marginTop: 340,
    marginLeft: 240,
    color: Colors.traceIcons
  }
});
export default LiveEventScreen;
