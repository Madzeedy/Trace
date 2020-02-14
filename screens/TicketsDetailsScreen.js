import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
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
import DateTimePicker from "react-native-modal-datetime-picker";
const { width } = Dimensions.get("window");

export default class TicketsDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      language: "",
      date: "",
      sales: ""
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
          headerName="Tickets"
          onPress={() => this.props.navigation.goBack()}
        />

        <ScrollView>
          <View style={styles.Form}>
            <TransInput title="Ticket Name" />
            <TransInput title="Event Description" />
            <View style={styles.Form}>
              <TransInput title="Quantity" keyboardtype="numeric" />
              <TransInput title="Amount" keyboardtype="numeric" />
            </View>
            <Text style={styles.subTitle}>Sales Starts</Text>
            <View style={styles.viewBac}>
              <MainButton
                text="Select Date&Time"
                style={{ marginLeft: 40 }}
                onPress={this.showPicker}
              />
            </View>
            <Text style={styles.subTitle}>Sales Ends</Text>
            <View>
              <MainButton
                text="Select Date&Time"
                style={{ marginLeft: 40 }}
                onPress={this.showPicker}
              />
            </View>
          </View>

          <View style={styles.Form}>
            <Text style={styles.subTitle}>Tickets allowed per order</Text>
            <View style={styles.viewBack}>
              <SmallInput title="Minimum" />
              <SmallInput title="Maximum" />
            </View>
          </View>
          <View style={styles.viewPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Payment options" value="Payments options" />
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
              selectedValue={this.state.sales}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sales: itemValue })
              }
            >
              <Picker.Item label="Sales channel" value="Sales channel" />
              <Picker.Item label="Agents" value="Agents" />
              <Picker.Item label="Wholesalers" value="Wholesalers" />
            </Picker>
            <MainButton text="Done" onPress={() => this.props.navigation.navigate("Welcome")}/>
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
TicketsDetailsScreen.navigationOptions = {
  header: null
};
