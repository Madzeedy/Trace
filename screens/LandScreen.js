import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import ExploreScreen from "./ExploreScreen";
import MyEventScreen from "./MyEventScreen";
//import styles from "../components/genStyle/styles"

const Tab = createMaterialTopTabNavigator();

class HomeScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <NotHeader
            headerName="Home"
            onPress={() => this.props.navigation.navigate("Notification")}
          />
          <Tab.Navigator>
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="My Events" component={MyEventScreen} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -20,
    backgroundColor: "#fff"
    // paddingBottom: 40,
  },

  title: {
    height: 40
  },
  titles: {
    flexDirection: "row"
  },
  text2: {
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: 16,
    marginLeft: 230,
    fontFamily: "font-semi",
    color: "#070707"
  },
  text1: {
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: 16,
    fontFamily: "font-semi",
    marginLeft: 20,
    color: "#070707"
  },
  caption: {
    fontSize: 16,
    marginTop: 40,
    marginLeft: 30,
    paddingBottom: 10
  },
  border: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#aeaeb0",
    marginTop: 5
    //height: 40
  },
  image: {
    width: 216,
    height: 126,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ImageCage: {
    height: 159,
    width: 216,
    borderWidth: 0.4,
    marginLeft: 30,
    borderRadius: 5
  },
  EventDetails: {},
  ImageDetails: {
    flexDirection: "row"
  },
  rightIcon1: {
    marginLeft: 110,
    marginTop: -20,
    color: "#707070"
  },
  rightIcon2: {
    marginLeft: 170,
    marginTop: -25,
    color: "#707070"
  },
  scrollView: {
    maxHeight: 160
  },
  name: {
    marginLeft: 5
  },
  image2: {
    marginLeft: 50,
    width: 77,
    height: 58,
    borderRadius: 5
  },
  image2details: {
    marginLeft: 10,
    paddingBottom: 30
  },
  all: {
    flexDirection: "row"
  }
});
export default HomeScreen;
