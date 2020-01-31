import React from 'react';
import PropTypes from 'prop-types'
import {
    View, Text, Image, Platform, TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors';

const CloseHeader = (props) => {
    const { onPress, headerName } = props

    return (
        <View style={[styles.container, { backgroundColor: Colors.primary_white, elevation: 3 }]}>
            <View style={styles.wrapper}>
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        marginHorizontal: 10
                    }}>
                    <Icon.Ionicons
                        name={Platform.os === 'ios' ? 'ios-close' : 'md-close'}
                        size={20}
                        color={Colors.traceTitle} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: Colors.traceTitle, fontSize: 16, marginLeft: 40 }]}>{headerName}  </Text>
            </View>
        </View>
    );
}

CloseHeader.propTypes = {
    onPress: PropTypes.func,
    headerName: PropTypes.string,
}

export default CloseHeader;