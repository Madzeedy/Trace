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
  Switch
} from "react-native";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from "@expo/vector-icons";
import Colors from "../constants/Colors";

class SettingsNotifScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      checkOne: false,
      checkTwo: false
    };
  }
  Switch_Test = (key,value) => {
    console.log(value)
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <NotHeader headerName="Home" onPress={() => this.props.navigation.navigate("Notification")}/>
        <View style={styles.account}>
          <View style={styles.ticked}>
            <Text style={styles.title}>On</Text>
            <Switch
              style={styles.switch}
              value={this.state.check}
              onChange={(sw)=>this.Switch_Test('check',sw)}
            />
          </View>

          <View style={styles.ticked}>
            <View style={styles.column}>
              <Text style={styles.title}>Reminders</Text>
              <Text style={styles.details}>
                Allow set of reminders for new events
              </Text>
            </View>
            <Switch
              style={styles.switch2}
              value={this.state.checkOne}
              onChange={(sw)=>this.Switch_Test('checkOne',sw)}
            />
          </View>

          <View style={styles.ticked}>
            <View style={styles.column}>
              <Text style={styles.title}>Recommendations</Text>
              <Text style={styles.details}>
                Get events based on interest and location
              </Text>
            </View>
            <Switch
              style={styles.switch3}
              color="#000"
              value={this.state.checkTwo}
              onChange={(sw)=>this.Switch_Test('checkTwo',sw)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
SettingsNotifScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  account: {
    marginLeft: 30,
    marginTop: 60,
    height: 360,
    width: 250
  },
  ticked: {
    marginLeft: 50,
    marginTop: 30,
    paddingBottom: 20,
    flexDirection: "row"
  },
  title: {
    marginLeft: -30,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#232323"
  },
  switch: {
    paddingTop: 15,
    marginLeft: 145,
    color: Colors.traceHeader
  },
  switch2: {
    marginTop: 5,
    marginLeft: 30,
    color: Colors.traceHeader,
    height: 30
  },
  switch3: {
    marginTop: 5,
    marginLeft: 34,
    color: "#000",
    height: 30
  },
  details: {
    fontSize: 10,
    marginLeft: -30,
    //paddingTop: 5,
    //fontWeight: "bold",
    color: "#707070",
    textAlign: "left"
  },
  column: {
    flexDirection: "column",
    width: 110
  },
  titles: {
    marginLeft: -30,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#232323"
  }
});

export default SettingsNotifScreen;
