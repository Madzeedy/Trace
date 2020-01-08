import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";

class Search3Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackHeader headerName="Select a City" />
        <View style={styles.time}>
          <View style={styles.ticked}>
            <Text style={styles.timesA}>Any Time</Text>
            <Icon.AntDesign
              style={styles.rightIcons}
              name={"check"}
              size={25}
              color='#008735'
            />
          </View>
          <Text style={styles.times}>Today</Text>
          <Text style={styles.times}>Tomorrow</Text>
          <Text style={styles.times}>This Weekend</Text>
          <Text style={styles.times}>In This Months</Text>
          <Text style={styles.times}>Pick a Date</Text>
        </View>
      </View>
    );
  }
}
Search3Screen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  time: {
    marginLeft: 40,
    marginTop: 60
  },
  timesA: {
    marginLeft: -40,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#959c97"
  },
  times: {
    paddingTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#959c97"
  },
  ticked: {
    marginLeft: 40,
    flexDirection: "row"
  },
  rightIcons: {
      marginTop: 10,
      marginLeft: 160
  }
});

export default Search3Screen;