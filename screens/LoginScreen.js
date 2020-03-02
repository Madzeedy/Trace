import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  Dimensions,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { MonoText } from "../components/StyledText";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";
import TransInput from "../components/TextInputs/EditInput";
import Colors from "../constants/Colors";
import { token } from "../constants/util";
// import FormPicker from '../components/select/selectPicker';;
const { width } = Dimensions.get("window");
const screenheight = Dimensions.get("window").height;
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: '',
    };
  }

  Login = () => {

    var data = {

      email: this.state.email,
      password: this.state.password,

    }
    fetch('https://tracevent.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)

    })
      .then((response) => response.json())
      .then(async (response) => {

        console.log(response)
        await AsyncStorage.setItem(token, response.token);
        if (response.token !== null) {
          this.props.navigation.navigate('TabScreen');
        }
        else {
          alert('Username or Password are Incorrect')
        }
        // console.log(response);
      }).catch((error) => {
        console.log(error)
      });
    // if (data == "first_name") {
    //   alert("authenticated successfully!!!");
    // }

  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.Form}>
            <TransInput type="email" title="Email" onChangeText={email => this.setState({ email: email })}
              value={this.state.email} />
            <TransInput type="password" title="Password" onChangeText={password => this.setState({ password: password })}
              value={this.state.password} />

            <MainButton
              text="Login"
              onPress={this.Login}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={styles.ptext}>
                Don't have an account yet ?
                <Text style={styles.span}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
      </ScrollView>
    );
  }
}
LoginScreen.navigationOptions = {
  headerShown: false,
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: screenheight / 3,
    paddingBottom: 20
  },

  logoContainer: {
    // marginVertical: 5,
    padding: 10
  },

  logo: {
    width: 170,
    height: 120
  },

  Form: {
    fontFamily: "font-bold",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontFamily: "font-semi",
    padding: 15,
    fontSize: 15,
    color: Colors.secondary_gray,
    textAlign: "center"
  },

  span: {
    color: Colors.traceTextColor
  },
  title: {
    color: Colors.traceTitle,
    fontSize: 25,
    fontFamily: "font-bold",
    paddingLeft: 15
  },
  ptext: {
    fontFamily: "font-semi",
    padding: 12,
    fontSize: 12,
    color: Colors.secondary_gray,
    textAlign: "center"
  }
});
