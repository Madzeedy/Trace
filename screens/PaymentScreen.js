import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  Platform,
  TextInput,
  TouchableOpacity
} from "react-native";

import * as Icon from "@expo/vector-icons";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";

class PaymentScreen extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    return (
      <View style={styles.container}>
        <BackHeader headerName="Select a City" onPress={() => this.props.navigation.goBack()}/>
        <Text style={styles.title}>Pay With:</Text>
        <View style={styles.phoneNumber}>
          <Text style={styles.code}>+250</Text>
          <TextInput style={styles.input} placeholder="Phone Number" />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Checkout")}>
        <View style={styles.paymentWays}>
            <Image style={styles.image} source={require('../assets/images/MoMoo.jpg')} />
            <Text style={styles.caption}> Mtn Mobile Money</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.paymentWays}>
            <Image style={styles.image} source={require('../assets/images/Tigo-Cash.png')} />
            <Text style={styles.caption}> Airtel Mobile Money</Text>
        </View>

        <View style={styles.paymentWays}>
            <Image style={styles.image} source={require('../assets/images/_Paypal.png')} />
            <Text style={styles.caption}> Paypal Payment</Text>
        </View>

        <View style={styles.paymentWays}>
            <Image style={styles.image} source={require('../assets/images/visa.png')} />
            <Text style={styles.caption}> Visa Card Payment</Text>
        </View>
      </View>
    );
  }
}
PaymentScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  title: {
    marginTop: 60,
    marginLeft: 80,
    fontSize: 16,
    fontWeight: "bold",
    color: "#707070",
    paddingBottom: 60
  },
  phoneNumber: {
    height: 33,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 0.6,
    flexDirection: 'row'
  },
  input: {
      marginBottom: 13,
      paddingLeft: 10,
      fontSize: 16,
      color: '#707070',
      fontWeight: "bold"
  },
  code: {
      marginLeft: 10,
      fontWeight: "bold",
      color: '#232323'
  },
  paymentWays: {
      height: 40,
      width: 225,
      borderWidth: 0.6,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 30,
      borderRadius: 5,
      borderColor: '#707070',
      flexDirection: 'row'
  },
  image: {
      //marginBottom: 80,
      width: 60,
      height: 40,
      borderRadius: 5
  },
  caption: {
    color: '#707070',
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 10
  }
});

export default PaymentScreen;
