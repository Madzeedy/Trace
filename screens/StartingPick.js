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
  Dimensions
} from "react-native";

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
class StartingPick extends Component {
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Image
          style={styles.image}
          source={require("../assets/images/Location-Intelligence.jpg")}
        />
        <Text style={styles.title} onPress={() => this.props.navigation.navigate("Login")}>Skip</Text>
        <Text style={styles.undertext}>
          Get Updated with all new events and be able to create your own
        </Text>
        <TouchableOpacity style={styles.button} >
          {/* <Text style={styles.text}>Skip</Text> */}
          <MainButton text="Pick" onPress={() => this.props.navigation.navigate("Search3Screen")} />
        </TouchableOpacity>
      </View>
    );
  }
}
StartingPick.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 265,
    fontSize: 18,
    fontFamily: "font-semi",
    //fontWeight: "bold",
    fontWeight: "bold",
    color: "#ffff"
  },
  image: {
    width: "100%",
    height: "100%"
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
    textAlign: "center"
  },

  button: {
    position: "absolute",
    borderRadius: 5,
    ...Platform.select({
      ios: {
        marginTop: width / 0.7
      },
      android: {
        marginTop: width / 0.7
      }
    }),
    //marginTop: 460,
    ...Platform.select({
      ios: {
        marginLeft: width / 6
      },
      android: {
        marginLeft: width / 7.4
      }
    }),
    //paddingHorizontal: 40,
    //paddingVertical: 8,
    width: width - 100,
    //height: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StartingPick;