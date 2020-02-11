import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
//import styles from "../components/genStyle/styles"

class ExploreScreen extends Component {
  render( { onPress, text } = this.props ) {
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>Upcoming Events</Text>
        <ScrollView>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.events}>
              <View style={styles.ImageCage}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/event1.jpg")}
                />
                <View style={styles.EventDetails}>
                  <Text style={styles.name}>Kigali</Text>
                  <Icon.AntDesign
                    style={styles.rightIcon1}
                    name={"sharealt"}
                    size={22}
                  />
                  <Icon.AntDesign
                    style={styles.rightIcon2}
                    name={"hearto"}
                    size={22}
                  />
                </View>
              </View>
            </View>

            <View style={styles.events}>
              <View style={styles.ImageCage}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/event2.jpg")}
                />
                <View style={styles.EventDetails}>
                  <Text style={styles.name}>Kigali</Text>
                  <Icon.AntDesign
                    style={styles.rightIcon1}
                    name={"sharealt"}
                    size={25}
                  />
                  <Icon.AntDesign
                    style={styles.rightIcon2}
                    name={"hearto"}
                    size={25}
                  />
                </View>
              </View>
            </View>

            <View style={styles.events}>
              <View style={styles.ImageCage}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/event3.jpg")}
                />
                <View style={styles.EventDetails}>
                  <Text style={styles.name}>Kigali</Text>
                  <Icon.AntDesign
                    style={styles.rightIcon1}
                    name={"sharealt"}
                    size={25}
                  />
                  <Icon.AntDesign
                    style={styles.rightIcon2}
                    name={"hearto"}
                    size={25}
                  />
                </View>
              </View>
            </View>

            <View style={styles.events}>
              <View style={styles.ImageCage}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/event4.png")}
                />
                <View style={styles.EventDetails}>
                  <Text style={styles.name}>Kigali</Text>
                  <Icon.AntDesign
                    style={styles.rightIcon1}
                    name={"sharealt"}
                    size={25}
                  />
                  <Icon.AntDesign
                    style={styles.rightIcon2}
                    name={"hearto"}
                    size={25}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <Text style={styles.caption}>All Events</Text>

          <TouchableOpacity >
          <View
            style={styles.all}
          >
            <Image
              style={styles.image2}
              source={require("../assets/images/event4.png")}
            />
            <View style={styles.image2details}>
              <Text>Kigali Festival</Text>
              <Text>31st Oct</Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.all}>
            <Image
              style={styles.image2}
              source={require("../assets/images/event3.jpg")}
            />
            <View style={styles.image2details}>
              <Text>Kigali Festival</Text>
              <Text>31st Oct</Text>
            </View>
          </View>

          <View style={styles.all}>
            <Image
              style={styles.image2}
              source={require("../assets/images/event2.jpg")}
            />
            <View style={styles.image2details}>
              <Text>Kigali Festival</Text>
              <Text>31st Oct</Text>
            </View>
          </View>

          <View style={styles.all}>
            <Image
              style={styles.image2}
              source={require("../assets/images/event1.jpg")}
            />
            <View style={styles.image2details}>
              <Text>Kigali Festival</Text>
              <Text>31st Oct</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

ExploreScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -20,
    backgroundColor: "#fff"
    // paddingBottom: 40,
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
    fontSize: 16,
    marginLeft: 230,
    fontFamily: "font-semi",
    color: "#070707"
  },
  text1: {
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: 16,
    fontFamily: "font-semi",
    marginLeft: 20,
    color: "#070707"
  },
  caption: {
    fontSize: 16,
    marginTop: 40,
    marginLeft: 30,
    paddingBottom: 10
  },
  border: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#aeaeb0",
    marginTop: 5
    //height: 40
  },
  image: {
    width: 216,
    height: 126,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ImageCage: {
    height: 159,
    width: 216,
    marginLeft: 30,
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  events: {
    paddingBottom: 10,
  },

  ImageDetails: {
    flexDirection: "row"
  },
  rightIcon1: {
    marginLeft: 110,
    marginTop: -12,
    color: "#707070"
  },
  rightIcon2: {
    marginLeft: 170,
    marginTop: -22,
    color: "#707070"
  },
  scrollView: {
    maxHeight: 160
  },
  name: {
    marginLeft: 5,
    fontFamily: 'font-semi',
    fontSize: 12,

  },
  image2: {
    marginLeft: 50,
    width: 77,
    height: 58,
    borderRadius: 5
  },
  image2details: {
    marginLeft: 10,
    paddingBottom: 30
  },
  all: {
    flexDirection: "row"
  }
});
export default ExploreScreen;
