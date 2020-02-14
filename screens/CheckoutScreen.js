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

import TransInput from "../components/TextInputs/EditInput";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles"
import CloseHeader from "../components/Header/CloseHeader";
// import FormPicker from '../components/select/selectPicker';
const { width } = Dimensions.get("window");

class CheckoutScreen extends Component {

    render() {

        return (

            <View style={{ flex: 1 }}>
                <CloseHeader headerName="Checkout" onPress={() => this.props.navigation.goBack()} />

                <ScrollView>

                    <View style={styles.container}>
                        <View style={styles.Form}>
                            <Text style={styles.eventTitle}>Kigali Festival</Text>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.viewCard}>

                                <View style={styles.Form}>
                                    <Text style={styles.subTitle}>Total:     rwf12,000</Text>

                                </View>
                                <View style={styles.viewBack}>
                                    <Text style={styles.item}>Item</Text>
                                    <Text style={styles.item}>Price</Text>
                                    <Text style={styles.item}>Qty</Text>
                                </View>
                                <View style={styles.viewBack}>
                                    <View style={styles.profileDescription}>
                                        <Text style={styles.description}>Regular</Text>
                                        <Text style={styles.description}>1/11/2020</Text>
                                        <Text style={styles.description}>8:00 PM</Text>
                                    </View>
                                    <Text style={styles.details}>8:00 PM</Text>
                                    <Text style={styles.details}>1</Text>
                                </View>
                                <View style={styles.line}>
                                </View>
                                <View style={styles.Form}>
                                    <Text style={styles.subTitle}>All fees included in price</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.viewDescription}>
                            <Text style={styles.item}>Your Info</Text>
                            <TransInput title="Firstname" />
                            <TransInput title="Lastname" />
                            <TransInput title="Email Address" />
                            <TransInput title="Phone Number" keyboardtype="numeric" />
                            <TransInput title="Birth date" />
                            {/* <MainButton text="Sign
                         Up" onPress={() => this.props.navigation.navigate("TabScreen")} /> */}
                        </View>
                        <View style={styles.Form}>
                            <MainButton text="Pay Now" onPress={() => this.props.navigation.navigate("Payment")}/>
                        </View>
                    </View>

                    <KeyboardAvoidingView
                        behavior={"padding"}
                        keyboardVerticalOffset={width / 24}
                    />

                </ScrollView>
            </View>
        );
    }
}
CheckoutScreen.navigationOptions = {
    header: null
};
export default CheckoutScreen;
