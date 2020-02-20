import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import BackHeader from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";

class NowScreen extends Component {
  handleClick = function() {
    this.setState({
      bgColor: "blue"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <BackHeader headerName="Home" />
        <View style={styles.imgCage}>
          <TouchableOpacity style={styles.upload}>
            <Icon.MaterialIcons
              style={styles.upIcon}
              name={"add-a-photo"}
              size={22}
            />
            <Text style={styles.upText}>Event Image</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reminder}>
          <Icon.Entypo
            style={styles.remIcon}
            name={"info"}
            size={22}
          />
          <Text style={styles.remText}>Maximum image size is 5mb. Recommended dimension: 1200x320 pixels</Text>
        </View>
        <MainButton text="Next" />
      </View>
    );
  }
}

NowScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -20,
    backgroundColor: "#fff"
    // paddingBottom: 40,
  },
  imgCage: {
    height: 180,
    width: 300,
    marginTop: 10,
    borderWidth: 0.7,
    borderRadius: 5,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0,0,0,0.4)",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.22,
        shadowRadius: 5
      },
      android: {
        elevation: 6
      }
    })
  },
  upload: {
    borderWidth: 0.7,
    height: 40,
    width: 140,
    borderRadius: 5,
    marginLeft: 80,
    marginTop: 120,
    flexDirection: "row",
    backgroundColor: "#dae8de"
  },
  upIcon: {
    marginTop: 7,
    color: "#707070"
  },
  upText: {
    marginTop: 9,
    marginLeft: 10,
    color: "#707070",
    fontWeight: "bold"
  },
  reminder: {
    flexDirection: "row",
    //alignSelf: "center",
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    width: 180
  },
  remText: {
    fontSize: 11,
    textAlign: "center"
  },remIcon: {
    marginTop: 4,
    fontFamily: "sans-serif-condensed"
  }
});

export default NowScreen;
