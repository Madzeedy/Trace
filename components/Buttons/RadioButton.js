import React, { Component } from "react";
import propTypes from "prop-types";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  CheckBox
} from "react-native";
import Colors from "../../constants/Colors";

var times = [
    {label: "Any Time", value: 0},
    {label: "Today", value: 0},
    {label: "Tomorrow", value: 0},
    {label: "This Weekend", value: 0},
    {label: "This Month", value: 0},
    {label: "Pick a Date", value: 0}
];

export default class RadioButtonComponent extends Component {
  
  render({ title } = this.props) {
    return (
      <View style={styles.container}>
          <RadioForm
            style={styles.input}
            selectionColor={Colors.primary}
            radio_props={times}
            onPress={(value) => {}}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    borderBottomWidth: 1
  }
});
