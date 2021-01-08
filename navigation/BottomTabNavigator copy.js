import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TouchableHighlight from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SearchScreen from '../screens/SearchScreen';
import MypageScreen from '../screens/MypageScreen';
import MoreScreen from '../screens/MoreScreen';
import { hide } from 'expo-splash-screen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, props }) {


// navigation.setOptions({
//   header: {
//     tintColor: {
//       color:"#f7b500",
//     }
//   }
// });

// TabBarOptions({
//   showLabel: false,
// });

 
  return (
    
    <BottomTab.Navigator 
      // style={props.focused ? styles.activeIcon : styles.nomalIcon}
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        keyboardHidesTabBar:true,
        activeTintColor:'#F2B04C',
        tabStyle:{
          backgroundColor: '#ffffff',
        },
        
        showLabel: false,
        headerTitle: false,
      }}
    >
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="search" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="heart" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="home" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="user" />
            ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="more-horizontal" />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}