import { Feather } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import { styles } from '../screens/HomeScreen';

export default function TabBarIcon(props) {
  return (
    <Feather
      name={props.name}
      size={props.focused ? 26 : 22}
      // style={props.focused ? styles.activeIcon : styles.nomalIcon}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}