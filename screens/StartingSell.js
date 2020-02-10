import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
// import {LinearGradient} from 'react-native-linear-gradient'
import Colors from '../constants/Colors'
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");
const images = [
  require("../assets/images/movie-hall-pic7.jpg"),
  require("../assets/images/Location-Intelligence.jpg"),
  require("../assets/images/wave-cinemas-gaur-central-mall-raj-nagar-ghaziabad-ghaziabad-multiplex-cinema-halls-3emuxsl.jpg"),
  require("../assets/images/event2.jpg"), // Network image
  require("../assets/images/tickets.jpeg") // Local image
];

class StartingSell extends Component {

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Text style={styles.title}>Sell Tickets</Text>
        <Text style={styles.undertext}>
          Get Updated with all new events and be able to create your own
        </Text>
        <TouchableOpacity style={styles.button}>
          {/* <Text style={styles.text}>Skip</Text> */}
          <MainButton text="Skip" />
        </TouchableOpacity>
      </View>
    );
  }
}
StartingSell.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'rgba(0,0,0,0.5),rgba(0,0,0,0.5)'

  },
  title: {
    position: "absolute",
    marginTop: 80,
    marginLeft: 115,
    fontSize: 18,
    fontFamily: "font-semi",
    //fontWeight: "bold",
    color: "#ffff"
  },
  image: {
    width: "100%",
    height: "100%",

  },
  undertext: {
    position: "absolute",
    marginTop: 400,
    marginLeft: 60,
    marginRight: 60,
    fontSize: 12,
    fontFamily: "font-semi",
    //fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },

  button: {
    position: "absolute",
    marginTop: 480,

    ...Platform.select({
      ios: {
        marginLeft: width / 6,
      },
      android: {
        marginLeft: width / 5,
      },
    }),
    // width: width-35,
    paddingHorizontal: 40,
    paddingVertical: 8,
    width: 220,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  // Button text
  text: {
    color: Colors.primary_white,
    textAlign: "justify",
    textAlign: "center"
  }
});

export default StartingSell;