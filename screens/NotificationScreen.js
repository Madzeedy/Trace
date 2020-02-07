import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  Button,
  Switch
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import Colors from "../constants/Colors";
import BackHeader from "../components/Header/BackHeader";

class NotificationScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BackHeader headerName="Notification" onPress={() => this.props.navigation.goBack()}/>
        <View style={styles.all}>
          <Image
            style={styles.image2}
            source={require("../assets/images/event4.png")}
          />
          <View style={styles.image2details}>
            <Text style={styles.title}>Check Out this new Event</Text>
            <Text style={styles.details}>Kigali Festival Oct 31 1:00 PM GMT KIMIHURURA</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
NotificationScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff"
  },
  all: {
    flexDirection: "row"
  },
  image2: {
    marginTop: 40,
    marginLeft: 30,
    width: 77,
    height: 58,
    borderRadius: 5
  },
  image2details: {
    marginTop: 40,
    marginLeft: 10,
    width: 135
  },
  title: {
      fontSize: 12.5
  },
  details: {
      color: "#707070",
      fontSize: 11
  }
});

export default NotificationScreen;
