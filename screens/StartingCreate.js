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


class StartingCreate extends Component {
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Image
          style={styles.image}
          source={require("../assets/images/malmanxx-GFNVoyqsmzg-unsplash.jpg")}
        />
        <Text style={styles.title}>Create Event</Text>
        <Text style={styles.undertext}>
          Get Updated with all new events and be able to create your own
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("StartingSell")}>
          {/* <Text style={styles.text}>Skip</Text> */}
          <MainButton text="Skip" />
        </TouchableOpacity>
      </View>
    );
  }
}
StartingCreate.navigationOptions = {
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
    //marginLeft: 50,
    backgroundColor: '#e38629',
    paddingHorizontal: 40,
    paddingVertical: 8,
    width: width / 100,
    //height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  // Button text
  text: {
    color: Colors.primary_white,
    textAlign: "justify",
    fontFamily: "font-semi",
    textAlign: "center"
  }
});

export default StartingCreate;