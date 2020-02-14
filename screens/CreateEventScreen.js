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
import DateTimePicker from "react-native-modal-datetime-picker";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles";
import SmallInput from "../components/TextInputs/SmallInput";
const { width } = Dimensions.get("window");

export default class CreateEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      language: "",
      date: "",
      category: "",
      event: ""
    };
  }

  handlePicker = () => {
    this.setState({
      isVisible: false
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true
    });
    console.log(this.state.isVisible);
  };

  hidePicker = () => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackHeader
          headerName="Create Events"
          onPress={() => alert("Please fill the required inputs")}
        />

        <ScrollView>
          <View style={styles.Form}>
            <TransInput title="Title" />
            <TransInput title="Event Description" />
          </View>
          <Text style={styles.subEvent}>Event Starts</Text>
          <View style={styles.viewBack}>
            <MainButton
              text="Select Date&Time"
              style={{ marginLeft: -20 }}
              onPress={this.showPicker}
            />
          </View>
          <Text style={styles.subEvent}>Event Ends</Text>
          <View style={styles.viewBack}>
            <MainButton
              text="Select Date&Time"
              style={{ marginLeft: -20 }}
              onPress={this.showPicker}
            />
          </View>

          <View style={styles.Form}>
            <Text
              style={{
                marginLeft: -207,
                paddingBottom: 15,
                paddingTop: 10,
                color: "#707070",
                fontWeight: "bold"
              }}
              onPress={() => this.props.navigation.navigate("Tickets")}
            >
              Ticket
            </Text>
            <View style={{ borderWidth: 0.7, width: 240, marginBottom: 10 }}></View>
            <TransInput style={{paddingTop: 10}} title="Venue" />
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
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Education" value="Education" />
              <Picker.Item label="Entertainment" value="Entertainment" />
              <Picker.Item label="Trade Shows" value="Trade Shows" />
            </Picker>
          </View>
          
          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.event}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ event: itemValue })
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

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={"datetime"}
          is24Hour={true}
        />
      </View>
    );
  }
}
CreateEventScreen.navigationOptions = {
  header: null
};
