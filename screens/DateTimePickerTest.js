import React, { Component } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';
import Colors from "../constants/Colors";

export default class DateTimePickerTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
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
    })
    console.log(this.state.isVisible)
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,

    });

  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.showPicker}
        >
          <Text style={{ marginLeft: 15, marginTop: 10 }}>Show Picker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          is24Hour={true} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#000",
    alignContent: "center"
  },
  button: {
    width: 120,
    height: 40,
    marginLeft: 100,
    marginTop: 260,
    borderRadius: 5,
    backgroundColor: Colors.primary_gray
  },
  Picker: {
    height: 200,
    width: "60%"
  }
});
