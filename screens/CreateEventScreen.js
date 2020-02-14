import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from "react-native";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles";
import SmallInput from "../components/TextInputs/SmallInput";
const { width } = Dimensions.get("window");

export default class CreateEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      date: ""
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackHeader
          headerName="Create Events"
          onPress={() => alert("it should go back")}
        />

        <ScrollView>
          <View style={styles.Form}>
            <TransInput title="Title" />
            <TransInput title="Event Description" />
            <TransInput title="Event starts" />
            <TransInput title="Event ends" />
          </View>
          <View style={styles.Form}>
            <Button title="Tickets" style={{marginLeft: -206, paddingBottom: 25, paddingTop: 10, color: "#707070", height: 10}} />
            <View
              style={{ borderWidth: 0.7, width: 242.5, marginLeft: 0 }}
            ></View>
            <TransInput title="Venue" />
          </View>

          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Event type" value="Event type" />
              <Picker.Item label="Free" value="Free" />
              <Picker.Item label="Mtn Mobile Money" value="Mtn Mobile Money" />
              <Picker.Item label="Airtel Money" value="Airtel Money" />
              <Picker.Item label="Tigo Cash" value="Tigo Cash" />
              <Picker.Item label="Visa Card" value="Visa Card" />
            </Picker>
          </View>
          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Event Category" value="Event Category" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Male" value="Male" />
            </Picker>
          </View>
          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Privacy" value="Privacy" />
              <Picker.Item label="Private event" value="Private event" />
              <Picker.Item label="Public event" value="Public event" />
            </Picker>
            <MainButton
              text="Create"
              onPress={() => this.props.navigation.navigate("Welcome")}
            />
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
      </View>
    );
  }
}
CreateEventScreen.navigationOptions = {
  header: null
};
