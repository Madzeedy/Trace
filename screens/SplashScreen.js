import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from "react-native";


export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.main}>
            <Image
              style={styles.image}
              source={require("../assets/images/Splash_Screen.png")}
            />
            <View style={styles.Text}>
              <Text style={styles.text}>
                Powered by Limitless
              </Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
      width: 220,
      height: 480,

  },
  text: {
    color: "#7A7A7A",
    fontSize: 12,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60,
  }
});