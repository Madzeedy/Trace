import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";

class Memo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <NotHeader headerName="Home" />
        <View style={styles.titles}>
          <View style={styles.title}>
            <Text style={styles.text1}>My Events</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text2}>Explore</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <Text style={styles.caption}>Upcoming Events</Text>
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
        <View style={styles.all}>
          <Image
            style={styles.image2}
            source={require("../assets/images/event4.png")}
          />
          <View style={styles.image2details}>
            <Text>Kigali Festival</Text>
            <Text>31st Oct</Text>
          </View>
        </View>

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
    );
  }
}
Memo.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
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
    fontSize: 18,
    marginLeft: 230,
    color: "#070707"
  },
  text1: {
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: 18,
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
    borderWidth: 0.4,
    marginLeft: 30,
    borderRadius: 5
  },
  EventDetails: {},
  ImageDetails: {
    flexDirection: "row"
  },
  rightIcon1: {
    marginLeft: 110,
    marginTop: -20,
    color: "#707070"
  },
  rightIcon2: {
    marginLeft: 170,
    marginTop: -25,
    color: "#707070"
  },
  scrollView: {
    maxHeight: 160
  },
  name: {
    marginLeft: 5
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

export default Memo;