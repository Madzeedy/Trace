/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View, Dimensions              // Container component
} from 'react-native';
import Colors from '../../constants/Colors';
const { width } = Dimensions.get('window')
export default class MainButton extends Component {
  render({ onPress, text } = this.props) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 5,
    margin: 15,
    // width: width-35,
    backgroundColor: Colors.traceButtonColor,
    paddingHorizontal: 40,
    paddingVertical: 8,
    width: 274,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  // Button text
  text: {
    color: Colors.primary_white,
    textAlign: 'center',
    fontFamily: 'font-bold',
    textAlign: 'center',
    fontSize: 12,

  },
});