import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import PortfolioScreen from "../Screens/PortfolioScreen";
import SettingScreen from "../Screens/SettingScreen";
import Transaction from "../Screens/Transaction";
import Login from "../Screens/Registration/Login";
import Signup from "../Screens/Registration/Signup";
import SwapScreen from "../Screens/SwapScreen";
import Rewards from "../Screens/Rewards";
import ShopScreen from "../Screens/ShopScreen";

export type TabsStackParamList = {
  home: undefined;
  shop: undefined;
  portfolio: undefined;
  swap: undefined;
  settings: undefined;
  transaction: undefined;
  login: undefined;
  rewards: undefined;
};
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>();
  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          backgroundColor: "white",

          opacity: 0.7 /* Setting the opacity */,
          // backgroundColor: "blue",

          height: 70,

          // alignSelf: "center",
        },
      }}
    >
      <TabsStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="home" {...props} />
                <Text>Home</Text>
              </View>
            );

            //
          },
        }}
      />
      <TabsStack.Screen
        name="portfolio"
        component={PortfolioScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="work" {...props} />
                <Text>Portfoilio</Text>
              </View>
            );

            // return <Icons name="work" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="rewards"
        component={Rewards}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="star" {...props} />
                <Text>Rewards</Text>
              </View>
            );

            // return <Icons name="bar-chart" {...props} />;
          },
        }}
      />

      <TabsStack.Screen
        name="swap"
        component={SwapScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="swap-vert" {...props} />
                <Text>Swap</Text>
              </View>
            );
            // return <Icons name="swap-vert" {...props} />;
          },
        }}
      />
      {/* <TabsStack.Screen
        name="shop"
        component={SettingScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="settings" {...props} />;<Text>Settings</Text>
              </View>
            );
            // return <Icons name="settings" {...props} />;
          },
        }}
      /> */}

      <TabsStack.Screen
        name="shop"
        component={ShopScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return (
              <View style={{}}>
                <Icons name="shop" {...props} />
                <Text>Shop</Text>
              </View>
            );
            // return <Icons name="settings" {...props} />;
          },
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const Example = () => {
  return <View />;
};
