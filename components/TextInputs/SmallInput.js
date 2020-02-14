import React from "react";
import propTypes from 'prop-types';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";
import Colors from "../../constants/Colors";

export function TransInput(props) {
    const { title, color, keyboardtype, value, onChangeText, text, ...otherProps } = props;
    return (
        <View style={styles.container} {...otherProps}>
            <View style={styles.check}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    style={styles.input}
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.secondary_gray}
                    placeholder={text}
                    placeHolderTextStyle={{ color: "#dddddd", fontSize: 12 }}
                    underlineColorAndroid={'transparent'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType={"next"}
                    onChangeText={onChangeText}
                    value={value}
                    editable={true}
                />
            </View>
        </View>
    );
}

TransInput.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    keyboardtype: propTypes.string,
    color: propTypes.string,
    onChangeText: propTypes.func,
    value: propTypes.any,
    ...View.propTypes
};

TransInput.defaultProps = {
    color: "blue",
}


export default TransInput;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        // flex: 1,
        // flexDirection: 'row'

    },
    input: {
        // lineHeight: 40,
        width: 96,
        borderColor: Colors.secondary_gray,
        borderBottomWidth: 1,
        fontSize: 13,
        color: Colors.secondary_gray,
    },

    title: {
        fontSize: 12,
        color: Colors.secondary_gray,
        fontFamily: 'font-regular'
    },

});