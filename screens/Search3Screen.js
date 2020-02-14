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

class Search3Screen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BackHeader headerName="Select A City" onPress={() => this.props.navigation.navigate("StartingBuy")}/>
        <View style={styles.Up}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your City Name"
            placeholderTextColor="#707070"
          />
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
            color={Colors.traceTitle}
          />
          <Text style={styles.locTitle}>
            Current Location
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
    fontSize: 16,
    fontWeight: "bold",
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
    position: "absolute",
    marginLeft: 260,
    marginTop: 33
  },
  location: {
    flexDirection: "row",
    marginLeft: 60,
    paddingTop: 30
  },
  locTitle: {
    paddingLeft: 40,
    fontSize: 16,
    fontWeight: "bold",
    color: "#707070"
  },
  address: {
    marginLeft: 6
  },
  City: {
    color: Colors.secondary_gray,
    fontSize: 12,
    marginLeft: 6,
    paddingBottom: 10
  }
});

export default Search3Screen;
