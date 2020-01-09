import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

export default class TicketsDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "", date: ''
        };
    }

    render() {

        return (

            <View style={styles.container}>

                <BackHeader headerName="Tickets" onPress={() => alert('it should go back')} />

                <ScrollView>

                    <View>

                        <TransInput title="Ticket Name" />
                        <TransInput title="Event Description" />
                        <TransInput title="Sales starts" />
                        <TransInput title="Sales ends" />
                    </View>
                    <View>

                        <TransInput title="Quantity" keyboardtype="numeric" />
                        <TransInput title="Amount" keyboardtype="numeric" />
                        <TransInput title="Tickets allowed per order" />

                    </View>

                    <View>

                        <TransInput title="Minimum" />
                        <TransInput title="Maximum" />
                        <TransInput title="District" />
                        <TransInput title="Cell" />
                        <TransInput title="Village" />

                    </View>

                    <View>

                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Payment options" value="Payments options" />
                            <Picker.Item label="Free" value="Free" />
                            <Picker.Item label="Mtn Mobile Money" value="Mtn Mobile Money" />
                            <Picker.Item label="Airtel Money" value="Airtel Money" />
                            <Picker.Item label="Tigo Cash" value="Tigo Cash" />
                            <Picker.Item label="Visa Card" value="Visa Card" />

                        </Picker>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Sales channel" value="Sales channel" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Male" value="Male" />
                        </Picker>
                        <MainButton text="Done" />

                    </View>

                </ScrollView>

                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />

            </View>
        );
    }
}
TicketsDetailsScreen.navigationOptions = {
    header: null,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary_white
    },

    Text: {
        fontSize: 16,
        marginLeft: 90,
        paddingTop: 24
    },

    Form: {
        justifyContent: "center",
        alignItems: "center"
    },

    UnderText: {
        textAlign: 'left',
        fontSize: 16,
        textDecorationLine: "underline",
        color: Colors.primary_gray,
        paddingLeft: 45,
        paddingBottom: 5,
        padding: 15
    },

    picker: {
        fontSize: 14,
        height: 35,
        width: 260,
        color: '#707070',
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#f8f8f8"
    },

    gendertext: {
        margin: 8,
        // textAlign: 'left',
        marginRight: 250,
    },

    gender: {
        fontSize: 14,
        color: "#707070",
    },

    border: {
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
    }
});