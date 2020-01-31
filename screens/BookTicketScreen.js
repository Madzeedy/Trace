import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles"
import SmallInput from "../components/TextInputs/SmallInput";
import CloseHeader from "../components/Header/CloseHeader";
const { width } = Dimensions.get("window");

export default class BookTickets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "", date: ''
        };
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <CloseHeader headerName="Ticket Details" onPress={() => alert('it should go back')} />

                <ScrollView>

                    <View style={styles.Form}>

                        <Text style={styles.eventTitle}>Kigali Festival</Text>
                        <Text style={styles.subTitle}>Fri, Nov 1,2019 8:00PM - 11:00 AM</Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>

                        <Text style={styles.subTitle}>VIP</Text>
                        <Text style={styles.description}>Rwf 12,000</Text>
                        <Text style={styles.description}>Sales end on nov 1,2019</Text>
                        <Text style={styles.subTitle}>Total: </Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>

                        <Text style={styles.subTitle}>Regular</Text>
                        <Text style={styles.description}>Rwf 12,000</Text>
                        <Text style={styles.description}>Sales end on nov 1,2019</Text>
                        <Text style={styles.subTitle}>Total: </Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>

                        <Text style={styles.calendar}>Enter Promo Code</Text>
                        <TransInput title="" text="code" />
                    </View>

                    <View style={styles.viewPicker}>
                        {/* <Picker
                            style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Privacy" value="Privacy" />
                            <Picker.Item label="Private event" value="Private event" />
                            <Picker.Item label="Public event" value="Public event" />
                        </Picker> */}
                        <MainButton text="Checkout" />
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
BookTickets.navigationOptions = {
    header: null,
};
