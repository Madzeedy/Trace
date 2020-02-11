import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import styles from './styles';
import Colors from '../../constants/Colors';


const NotHeader = (props) => {
  const { onPress, headerName } = props

  return (
    <View style={[styles.container, { backgroundColor: Colors.traceHeader, elevation: 3 }]}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            marginHorizontal: 10
          }}>
        </TouchableOpacity>
        <Text style={[styles.title, { color: Colors.primary_white }]}>{headerName}  </Text>
        <Icon.Ionicons
          style={styles.rightIcons}
          name={'md-notifications'}
          size={25}
          color={Colors.primary_white}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

NotHeader.propTypes = {
  onPress: PropTypes.func,
  headerName: PropTypes.string,
}

export default NotHeader;