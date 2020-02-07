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
  TouchableOpacity
} from "react-native";
import Colors from '../constants/Colors'

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
        <Image
          style={styles.image}
          source={require("../assets/images/dylan-mullins-Ubhjpv7q0Pk-unsplash.jpg")}
        />
        <Text style={styles.title}>Sell Tickets</Text>
        <Text style={styles.undertext}>
          Get Updated with all new events and be able to create your own
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("StartingBuy")}>
          <Text style={styles.text}>Skip</Text>
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
    backgroundColor: "#fff"
  },
  title: {
    position: "absolute",
    marginTop: 100,
    marginLeft: 95,
    fontSize: 28,
    //fontWeight: "bold",
    color: "#232323",
    fontWeight: "bold"
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#232323",
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
    width: 220,
    height: 30,
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

export default StartingSell;