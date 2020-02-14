import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles"
import SmallInput from "../components/TextInputs/SmallInput";
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

            <View style={{ flex: 1 }}>

                <BackHeader headerName="Tickets" onPress={() => this.props.navigation.goBack()} />

                <ScrollView>

                    <View style={styles.Form}>

                        <TransInput title="Ticket Name" />
                        <TransInput title="Event Description" />
                        <View style={styles.viewBack}>
                            <SmallInput title="Sales starts" />
                            <SmallInput title="Sales ends" />
                        </View>

                    </View>
                    <View style={styles.Form}>

                        <TransInput title="Quantity" keyboardtype="numeric" />
                        <TransInput title="Amount" keyboardtype="numeric" />


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
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
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
