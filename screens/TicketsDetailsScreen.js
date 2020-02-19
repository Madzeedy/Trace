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
import moment from 'moment';
import DateTimePicker from "react-native-modal-datetime-picker";
const { width } = Dimensions.get("window");

export default class TicketsDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      visible: false,
      language: "",
      date: "",
      sales: "",
      ticket_name: '',
      description: '',
      start_date: '',
      end_date: '',
      quantity: '',
      amount: ' ',
    };
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      start_date: moment(datetime).format("YYYY-MM-DD      HH:mm"),

    });
  };
  Picker = (datetime) => {
    this.setState({
      visible: false,
      end_date: moment(datetime).format("YYYY-MM-DD         HH:mm")
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true
    });

  };
  show = () => {
    this.setState({
      visible: true
    });

  };

  hidePicker = () => {
    this.setState({
      isVisible: false
    });

  }
  hide = () => {
    this.setState({
      visible: false
    });

  }

  //Backend Post

  Ticket = () => {
    var data = {
      ticket_name: this.state.ticket_name,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      quantity: this.state.quantity,
      amount: this.state.amount,
    }
    fetch('https://tracevent.herokuapp.com/api/ticket', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data),

    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('response object:', responseJson)
      })

      .catch((error) => {
        console.log(error)
      });
    // console.log(data)
  }

  // end 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackHeader
          headerName="Tickets"
          onPress={() => this.props.navigation.goBack()}
        />

        <ScrollView>
          <View style={styles.Form}>
            <TransInput title="Ticket Name" onChangeText={ticket_name => this.setState({ ticket_name: ticket_name })}
              value={this.state.ticket_name} />
            <TransInput title="Event Description" onChangeText={description => this.setState({ description: description })}
              value={this.state.description} />
            <View style={styles.Form}>
              <TransInput title="Quantity" keyboardtype="numeric" onChangeText={quantity => this.setState({ quantity: quantity })}
                value={this.state.quantity} />
              <TransInput title="Amount" keyboardtype="numeric" onChangeText={amount => this.setState({ amount: amount })}
                value={this.state.amount} />
            </View>
            <Text style={styles.subTitle}>Sales Starts</Text>
            <View style={styles.viewBac}>
              <View style={styles.Form}>
                <Text style={styles.time}>{this.state.start_date}</Text>
              </View>

              <MainButton
                text="Select Date&Time"
                style={{ marginLeft: 40 }}
                onPress={this.showPicker}
              />
            </View>
            <Text style={styles.subTitle}>Sales Ends</Text>
            <View>
              <View style={styles.Form}>
                <Text style={styles.time}>{this.state.end_date}</Text>
              </View>
              <MainButton

                text="Select Date&Time"
                style={{ marginLeft: 40 }}
                onPress={this.show}
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
            <MainButton text="Done" onPress={this.Ticket} />
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
        <DateTimePicker
          isVisible={this.state.visible}
          onConfirm={this.Picker}
          onCancel={this.hide}
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
