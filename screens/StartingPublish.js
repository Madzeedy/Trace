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
const screenheight = Dimensions.get("window").height;

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
        <TouchableOpacity style={styles.button} >
          {/* <Text style={styles.text}>Skip</Text> */}
          <MainButton text="Skip" onPress={() => this.props.navigation.navigate("StartingCreate")} />
        </TouchableOpacity>
      </View>
    );
  }
}
StartingPublish.navigationOptions = {
  headerShown: false,
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
    fontFamily: "font-semi",
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