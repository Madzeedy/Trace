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
    ImageBackground
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { MonoText } from "../components/StyledText";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";
//import TransInput from "../components/TextInputs/EditInput";;
import Colors from "../constants/Colors";
import styles from "../components/genStyle/styles";
import JobHeader from '../components/Header/jobHeader'
// import FormPicker from '../components/select/selectPicker';
const { width } = Dimensions.get("window");

class EventDetailsScreen extends Component {
    render() {

        return (
            <ScrollView>
                <JobHeader style={styles.header} onPress2={() => this.props.navigation.navigate("TabScreen")} />
                <ImageBackground source={require("../assets/images/pexels-photo-707915.jpeg")} style={styles.backImage}>

                </ImageBackground>
                <View style={styles.container}>

                    <View style={styles.viewTitle}>
                        <Text style={styles.eventTitle}>Kigali Festival</Text>
                        <Text style={styles.subTitle}>By Limitless Agency</Text>
                    </View>
                    <View style={styles.viewDescription}>
                        <Text style={styles.subTitle}>Saturday, November 9</Text>
                        <Text style={styles.description}>1:00 PM - 10:00 PM GMT</Text>
                    </View>
                    <View style={styles.viewCalendar}>
                        <Text style={styles.calendar}>Add to calendar</Text>
                    </View>
                    <View style={styles.viewDescription}>
                        <Text style={styles.subTitle}>Rugando, Kimihurura</Text>
                        <Text style={styles.description}>KG 10 632 ST</Text>
                    </View>
                    <View style={styles.viewDescription}>
                        <Text style={styles.subTitle}>Rwf 2000 - Rwf 10000</Text>
                        <Text style={styles.description}>On traceEvent</Text>


                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>
                        <Text style={styles.subTitle}>About</Text>
                        <Text style={styles.description}>Lorem ipsum lorem ipsum</Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>
                        <Text style={styles.subTitle}>Location</Text>
                        <Text style={styles.calendar}>Get Location</Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.viewDescription}>

                        <View style={styles.viewBack}>
                            <Text style={styles.subTitle}>Organizer</Text>
                            <TouchableOpacity style={styles.viewFollow}>
                                <Text style={styles.subTitle}>Follow
                            <Icon.Ionicons
                                        name={Platform.os === 'ios' ? 'ios-person-add' : 'md-person-add'}
                                        size={20}
                                        color={Colors.secondary_gray} />
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* <Image style={styles.profile} source={require('../assets/images/pexels-photo-707915.jpeg')} /> */}

                        <View style={styles.imageContainer}>
                            <Image style={styles.profile} source={require('../assets/images/pexels-photo-707915.jpeg')} />

                            <View style={styles.profileDescription}>
                                <Text style={styles.subTitle}>Limitless Agency</Text>
                                <Text style={styles.description}>Lorem ipsum lorem ipsum</Text>
                                <Text style={styles.description}>Lorem ipsum lorem ipsum</Text>
                                <Text style={styles.calendar}>Details</Text>
                            </View>

                        </View>

                    </View>
                    <View style={styles.Form}>
                        <MainButton text="Tickets" onPress={() => this.props.navigation.navigate("Signup")} />
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
EventDetailsScreen.navigationOptions = {
    headerShown: false,
};
export default EventDetailsScreen;
