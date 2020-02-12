import React from 'react';
import * as Icon from "@expo/vector-icons";

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon.FontAwesome
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.traceButtonColor : Colors.tabIconDefault}
    />
  );
}
