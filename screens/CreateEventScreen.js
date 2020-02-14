import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
  Button,
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
const { width } = Dimensions.get("window");

export default class CreateEventScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "", date: '',
            category: '', event: '',
        };
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <BackHeader headerName="Create Events" onPress={() => alert('it should go back')} />

                <ScrollView>

                    <View style={styles.Form}>

                        <TransInput title="Title" />
                        <TransInput title="Event Description" />
                    </View>
                    <Text style={styles.subEvent}>Event Starts</Text>
                    <View style={styles.viewBack}>

                        <SmallInput title="Date" />
                        <SmallInput title="Time" />

                    </View>
                    <Text style={styles.subEvent}>Event Ends</Text>
                    <View style={styles.viewBack}>

                        <SmallInput title="Date" />
                        <SmallInput title="Time" />

                    </View>

                    <View style={styles.Form}>

                        <TransInput title="Tickets" />
                        <TransInput title="Venue" />


                    </View>


                    <View style={styles.viewPicker}>

                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Event type" value="Event type" />
                            <Picker.Item label="Business" value="Business" />
                            <Picker.Item label="Education" value="Education" />
                            <Picker.Item label="Entertainment" value="Entertainment" />
                            <Picker.Item label="Trade Shows" value="Trade Shows" />

                        </Picker>
                    </View>
                    {/* <View style={styles.viewPicker}>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.category}
                            onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
                            <Picker.Item label="Event Category" value="Event Category" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Male" value="Male" />
                        </Picker>
                    </View> */}
                    <View style={styles.viewPicker}>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.event}
                            onValueChange={(itemValue, itemIndex) => this.setState({ event: itemValue })}>
                            <Picker.Item label="Privacy" value="Privacy" />
                            <Picker.Item label="Private event" value="Private event" />
                            <Picker.Item label="Public event" value="Public event" />
                        </Picker>
                        <MainButton text="Create" onPress={() => this.props.navigation.navigate("Welcome")}/>
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
CreateEventScreen.navigationOptions = {
  header: null
};
