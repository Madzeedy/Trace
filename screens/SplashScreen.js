import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");


export default class SplashScreen extends Component {

  componentDidMount() {

    setTimeout(() => {

      this.props.navigation.navigate('StartingPublish')

    }, 5000);

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image
            style={styles.image}
            source={require("../assets/images/Splash_Screen.png")}
          />
          {/* <View style={styles.Text}>
              <Text style={styles.text}>
                Powered by Limitless
              </Text>
            </View> */}
        </View>
      </View>
    );
  }
}

SplashScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({

  image: {
    width: width - 0,
    height: 540,

  },
  text: {
    position: "absolute",
    color: "#7A7A7A",
    fontSize: 12,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60,
  }
});