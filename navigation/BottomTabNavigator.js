import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SearchScreen from '../screens/SearchScreen';
import MypageScreen from '../screens/MypageScreen';
import MoreScreen from '../screens/MoreScreen';
import { hide } from 'expo-splash-screen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const TabBarOptions = BottomTabBarOptions();

export default function BottomTabNavigator({ navigation, route, TabBarOptions }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

navigation.setOptions({
  TabBarOptions: {
    showLabel: false
  },
  header: {
    tintColor: {
      color:"#f7b500",
    }
  }
});
 
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />,
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          // title: hide,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="more-horizontal" />,
        }}
      />
    </BottomTab.Navigator>
  );
}