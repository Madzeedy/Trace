import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import TransInput from "../components/TextInputs/EditInput";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles"
import SmallInput from "../components/TextInputs/SmallInput";
import NotHeader from "../components/Header/NotHeader";
const { width } = Dimensions.get("window");

export default class MyTicketScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "", date: ''
        };
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <NotHeader headerName="Tickets" onPress={() => this.props.navigation.navigate("Notification")} />

                <ScrollView>

                    <View style={styles.viewTicket}>
                        <Text style={styles.subTitle}>No booked tickets yet</Text>

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
MyTicketScreen.navigationOptions = {
    headerShown: false,
};
