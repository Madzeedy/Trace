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
    KeyboardAvoidingView
} from "react-native";
import { MonoText } from "../components/StyledText";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";
import TransInput from "../components/TextInputs/EditInput";
import Colors from "../constants/Colors";
// import FormPicker from '../components/select/selectPicker';
const { width } = Dimensions.get("window");

class SignUpScreen extends Component {

    render() {

        return (

            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.logoContainer}>

                        <Text style={styles.title}>let's Get Started</Text>
                        <Text style={styles.text}>Sign Up or log in to see what's
                        happening near you</Text>
                    </View>

                    <View style={styles.Form}>

                        <TransInput title="Firstname" />
                        <TransInput title="Lastname" />
                        <TransInput title="Email Address" />
                        <TransInput title="Password" />

                        <MainButton text="Get Started" onPress={() => this.props.navigation.navigate("TabScreen")} />
                        <TouchableOpacity>

                            <Text style={styles.ptext}>Already an Account? <Text style={styles.span}>Login</Text> </Text>
                        </TouchableOpacity>
                        <Text style={styles.ptext}>By continuing, you agree to traceEvent's
                               Terms of use and <Text style={styles.span}>privacy policy</Text>.</Text>
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
SignUpScreen.navigationOptions = {
    header: null
};
export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 75,
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
        textAlign: "center",
    },

    span: {
        color: Colors.traceTextColor
    },
    title: {
        color: Colors.traceTitle,
        fontSize: 25,
        fontFamily: 'font-bold',
        paddingLeft: 15,
    },
    ptext: {
        fontFamily: "font-semi",
        padding: 12,
        fontSize: 12,
        color: Colors.secondary_gray,
        textAlign: "center",
    }
});
