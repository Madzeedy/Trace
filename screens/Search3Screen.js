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
  TextInput
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import Colors from "../constants/Colors";
import BackHeader from "../components/Header/BackHeader";
import Inputs from "../components/Input";
class Search3Screen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BackHeader headerName="Select A City" onPress={() => this.props.navigation.goBack()} />
        <View style={styles.Up}>
          <Inputs title="Enter your City..." />
          <Icon.Feather
            style={styles.searchIcon}
            name={"search"}
            size={25}
            color={Colors.secondary_gray}
            onPress={() => this.props.navigation.navigate("TabScreen")}
          />
        </View>
        <View style={styles.location}>
          <Icon.MaterialIcons
            style={styles.locIcon}
            name={"my-location"}
            size={25}
            color={Colors.secondary_gray}
          />
          <Text style={styles.locTitle}>
            Add Current Location
          </Text>
        </View>
        <View style={styles.account}>
          <Text style={styles.title}>Recent Location</Text>
          <Text style={styles.address}>Kimihurura</Text>
          <Text style={styles.City}>Kigali</Text>
        </View>

        <View style={styles.border}></View>

        <View style={styles.account}>
          <Text style={styles.title}>Popular Cities</Text>

          <Text style={styles.address}>BangKok</Text>
          <Text style={styles.City}>Thailand</Text>

          <Text style={styles.address}>Mombasa</Text>
          <Text style={styles.City}>Kenya</Text>

          <Text style={styles.address}>Bujumbura</Text>
          <Text style={styles.City}>Burundi</Text>
        </View>

      </ScrollView>
    );
  }
}
Search3Screen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  account: {
    marginLeft: 55,
    marginTop: 60
  },
  about: {},
  border: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#aeaeb0",
    marginTop: 5
    //height: 40
  },
  title: {
    marginTop: -24,
    paddingBottom: 24,
    fontSize: 13,
    fontFamily: 'font-semi',
    color: "#232323"
  },
  input: {
    borderWidth: 1,
    borderColor: "#707070",
    width: 240,
    height: 33,
    marginLeft: 50,
    marginTop: 30,
    borderRadius: 5
  },
  searchIcon: {

    marginLeft: 10,
    paddingTop: 10,

  },
  location: {
    flexDirection: "row",
    marginLeft: 60,
    paddingTop: 25,

  },
  locTitle: {
    paddingLeft: 40,
    fontSize: 13,
    color: "#707070",
    fontFamily: 'font-bold'
  },
  locIcon: {
    paddingBottom: 5,
  },
  address: {
    marginLeft: 6,
    fontSize: 12,
    fontFamily: 'font-regular',
  },
  City: {
    color: Colors.secondary_gray,
    fontSize: 11,
    marginLeft: 6,
    paddingBottom: 10,
    fontFamily: 'font-regular',
  },
  Up: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
});

export default Search3Screen;
