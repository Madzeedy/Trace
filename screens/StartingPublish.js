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

const { width } = Dimensions.get("window");
const screenheight = Dimensions.get("window").height;

const images = [
  require("../assets/images/movie-hall-pic7.jpg"),
  require("../assets/images/Location-Intelligence.jpg"),
  require("../assets/images/wave-cinemas-gaur-central-mall-raj-nagar-ghaziabad-ghaziabad-multiplex-cinema-halls-3emuxsl.jpg"),
  require("../assets/images/event2.jpg"), // Network image
  require("../assets/images/tickets.jpeg") // Local image
];
class StartingPublish extends Component {
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Image
          style={styles.image}
          source={require("../assets/images/applause-audience-backlit-2147029.jpg")}
        />
        <Text style={styles.title}>Publish Event</Text>
        <Text style={styles.undertext}>
          Get Updated with all new events and be able to create your own
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("StartingCreate")}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
StartingPublish.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    position: "absolute",
    marginTop: 80,
    marginLeft: 115,
    fontSize: 18,
    //fontWeight: "bold",
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
    //fontWeight: "bold",
    color: "#ffff",
    textAlign: "center"
  },

  button: {
    position: "absolute",
    borderRadius: 5,
    marginTop: 480,
    marginLeft: 50,
    // width: width-35,
    backgroundColor: '#e38629',
    paddingHorizontal: 40,
    paddingVertical: 8,
    width: width - 100,
    //height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  // Button text
  text: {
    color: Colors.primary_white,
    textAlign: "justify",
    fontFamily: "space-mono",
    textAlign: "center"
  }
});

export default StartingPublish;