import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  Button,
  TouchableOpacity
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import Colors from "../constants/Colors";

class Profile1Screen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <NotHeader
          headerName="Home"
          onPress={() => this.props.navigation.navigate("Notification")}
        />
        <View style={styles.account}>
          <Text style={styles.title}>Account:</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Profile</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SettingNotif")}
          >
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Push Notification</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ManageEvents")}
          >
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Manage Events</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.border}></View>

        <View style={styles.account}>
          <Text style={styles.title}>About:</Text>

          <TouchableOpacity>
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Rate Us</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Legal</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ticked}>
              <Text style={styles.timesA}>FeedBack</Text>
              <Icon.Feather
                style={styles.Icons}
                name={"chevron-right"}
                size={25}
                color={Colors.secondary_gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ticked}>
              <Text style={styles.timesA}>Logout</Text>
              <Icon.AntDesign
                style={styles.Icons}
                name={"logout"}
                size={25}
                color="#c91c10"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
Profile1Screen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  account: {
    marginLeft: 40,
    marginTop: 60
  },
  about: {},
  ticked: {
    marginLeft: 70,
    flexDirection: "row",
    paddingBottom: 20
  },
  Icons: {
    marginTop: 10,
    marginLeft: "auto",
    paddingRight: 20
  },
  timesA: {
    marginLeft: -70,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#959c97"
  },
  border: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#aeaeb0",
    marginTop: 5
    //height: 40
  },
  title: {
    marginTop: -24,
    paddingBottom: 24,
    fontSize: 16,
    fontWeight: "bold",
    color: "#232323"
  }
});

export default Profile1Screen;
