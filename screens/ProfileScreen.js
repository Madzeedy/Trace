import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import Header from '../components/Header/BackHeader';
import Colors from '../constants/Colors';
import TransInput from '../components/TextInputs/EditInput';
const { width } = Dimensions.get("window");

class ProfileScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header headerName="profile" onPress={() => this.props.navigation.navigate("Profile1")} />

                <ScrollView>

                    <View style={styles.imageContainer}>

                        <Image style={styles.profile} source={require('../assets/images/pexels-photo-707915.jpeg')} />

                    </View>

                    <View style={styles.Form}>

                        <TransInput title="Firstname" />
                        <TransInput title="Lastname" />
                        <TransInput title="Email Address" />
                        <TransInput title="Phone Number" />

                    </View>

                </ScrollView>

                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />

            </View>
        )
    }
}
ProfileScreen.navigationOptions = {
    headerShown: false,
};
export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    profile: {

        width: 150,
        height: 150,
        borderRadius: 90,

    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },

})