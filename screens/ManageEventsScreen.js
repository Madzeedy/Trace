import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  Button
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import Colors from "../constants/Colors";

class ManageEventsScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <NotHeader headerName="Home" />
        <View style={styles.titles}>
          <View style={styles.title}>
            <Text style={styles.text1}>Live</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text2}>Past</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <Icon.MaterialIcons style={styles.create} name={"add-circle"} size={50} />
      </ScrollView>
    );
  }
}
ManageEventsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
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
    fontSize: 18,
    marginLeft: 230,
    color: "#070707"
  },
  text1: {
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: 18,
    marginLeft: 20,
    color: "#070707"
  },
  caption: {
    fontSize: 16,
    marginTop: 40,
    marginLeft: 30,
    paddingBottom: 10
  },
  scrollView: {
    maxHeight: 160
  },
  border: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#aeaeb0",
    marginTop: 5
    //height: 40
  },
  create: {
    marginLeft: 250,
    marginTop: 320,
    color: Colors.traceIcons,
  }
});

export default ManageEventsScreen;
