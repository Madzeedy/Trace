import React from 'react';
import PropTypes from 'prop-types'
import {
  View, Text, Image,Platform, TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors';

const BackHeader = (props) => {
  const { onPress,headerName } = props

  return (
    <View style={[styles.container,{backgroundColor: Colors.traceHeader,elevation: 3}]}>
      <View style={styles.wrapper}>
      <TouchableOpacity
          onPress={onPress}
          style={{
            marginHorizontal: 10
          }}>
          <Icon.Ionicons
            name={Platform.os==='ios'?'ios-arrow-round-back':'md-arrow-round-back'}
            size={25}
            color={Colors.primary_white} />
        </TouchableOpacity>
        <Text style={[styles.title,{color:Colors.primary_white, fontSize: 16, marginLeft: 40}]}>{headerName}  </Text>
      </View>
    </View>
  );
}

BackHeader.propTypes = {
  onPress: PropTypes.func,
  headerName: PropTypes.string,
}

export default BackHeader;