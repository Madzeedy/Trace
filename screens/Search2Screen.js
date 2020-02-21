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
import Colors from "../constants/Colors";
import { RadioButton } from "react-native-paper";

class Search2Screen extends Component {
  state = {
    checked: "first"
  };

  Ticked() {
    return (
      <View>
        <Icon.MaterialIcons
          style={styles.checked}
          name={"my-location"}
          size={25}
          color={Colors.primary_black}
        />
      </View>
    );
  }

  render() {
    const { checked } = this.state;

    return (
      <View style={styles.container}>
        <BackHeader
          headerName="Time works for you"
          onPress={() => this.props.navigation.navigate("Search")}
        />
        <View style={styles.time}>
          <TouchableOpacity
            style={styles.ticked}
            onPress={() => this.props.navigation.navigate("Preferred")}
          >
            <Text style={styles.timesA}>Any Time</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "first" });
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ticked}
            onPress={() => this.props.navigation.navigate("Preferred")}
          >
            <Text style={styles.timesA}>Today</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "second" });
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ticked} onPress={() => this.props.navigation.navigate("Preferred")}>
            <Text style={styles.timesA}>Tomorrow</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                value="third"
                status={checked === "third" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "third" });
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ticked}
            onPress={() => this.props.navigation.navigate("Preferred")}
          >
            <Text style={styles.timesA}>This Weekend</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                value="fourth"
                status={checked === "fourth" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "fourth" });
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ticked}
            onPress={() => this.props.navigation.navigate("Preferred")}
          >
            <Text style={styles.timesA}>This Month</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                selectionColor={Colors.primary_black}
                value="fifth"
                status={checked === "fifth" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "fifth" });
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ticked}
            onPress={() => this.props.navigation.navigate("Preferred")}
          >
            <Text style={styles.timesA}>Pick a Date</Text>
            <View style={styles.radioButtons}>
              <RadioButton
                value="sixth"
                status={checked === "sixth" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ checked: "sixth" });
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Search2Screen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  checkMark: {
    marginLeft: 120,
    height: 30
  },
  radioButtons: {
    marginLeft: "auto",
    //backgroundColor: "#232323",
    height: 30
  },
  time: {
    marginLeft: 40,
    marginTop: 60
  },
  timesA: {
    marginLeft: -40,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#959c97"
  },
  ticked: {
    marginLeft: 30,
    paddingBottom: 30,
    flexDirection: "row",
    paddingRight: 30
  }
});

export default Search2Screen;
