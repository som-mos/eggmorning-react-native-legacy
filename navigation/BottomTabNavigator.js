import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import SearchScreen from '../screens/SearchScreen';
import MypageScreen from '../screens/MypageScreen';
import MoreScreen from '../screens/MoreScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

navigation.setOptions({ 
  header: {
    titleStyle: {
     color:"#494547",
    },
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
          title: '검색',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />,
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          title: '찜목록',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: '더보기',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="more-horizontal" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Search':
//       return 'Find Something';
//     case 'Bookmark':
//       return 'Bookmark';
//     case 'Home':
//       return 'Main';
//     case 'Mypage':
//       return 'Mypage';
//     case 'More':
//       return 'Links to learn more';
//   }
// }
