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

export type TabsStackParamList = {
  home: undefined;
  markets: undefined;
  portfolio: undefined;
  browser: undefined;
  settings: undefined;
  transaction: undefined;
  login: undefined;
  signup: undefined;
};
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>();
  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          marginHorizontal: 50,
          borderRadius: 32,
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
            return <Icons name="account-balance-wallet" {...props} />;
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
            return <Icons name="work" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="transaction"
        component={Transaction}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="bar-chart" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="login"
        component={Login}
        options={{
          headerTransparent: true,
          headerShown: false,
          // tabBarIcon(props) {
          //   return <Icons name="bar-chart" {...props} />;
          // },
        }}
      />
      <TabsStack.Screen
        name="signup"
        component={Signup}
        options={{
          headerTransparent: true,
          headerShown: false,
          // tabBarIcon(props) {
          //   return <Icons name="account-balance-wallet" {...props} />;
          // },
        }}
      />
      <TabsStack.Screen
        name="browser"
        component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="swap-vert" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="settings"
        component={SettingScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="settings" {...props} />;
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
