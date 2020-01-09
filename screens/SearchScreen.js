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
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import styles from '../components/genStyle/styles'
import Inputs from "../components/Input";
import NotHeader from "../components/Header/NotHeader";
import * as Icon from '@expo/vector-icons';
import Colors from "../constants/Colors";
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class SearchScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <NotHeader headerName="Search" />

                <ScrollView>

                    <View style={styles.Form}>

                        <Inputs title="Search for..." keyboardtype="numeric" />
                    </View>
                    <TouchableOpacity style={styles.viewBack}>
                        <Text style={styles.subTitle}>Date</Text>
                        <Icon.Feather style={styles.icon}
                            name={Platform.os === 'ios' ? 'chevron-right' : 'chevron-right'}
                            size={20}
                            color={Colors.secondary_gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBack}>
                        <Text style={styles.subTitle}>City</Text>
                        <Icon.Feather style={styles.icon}
                            name={Platform.os === 'ios' ? 'chevron-right' : 'chevron-right'}
                            size={20}
                            color={Colors.secondary_gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBack}>
                        <Text style={styles.subTitle}>Category</Text>
                        <Icon.Feather style={styles.icon}
                            name={Platform.os === 'ios' ? 'chevron-right' : 'chevron-right'}
                            size={20}
                            color={Colors.secondary_gray} />


                    </TouchableOpacity>

                </ScrollView>

                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />

            </View>

        );
    }
}
SearchScreen.navigationOptions = {
    header: null,
};
export default SearchScreen;
