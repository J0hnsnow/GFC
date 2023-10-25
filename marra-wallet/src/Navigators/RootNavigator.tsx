import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/DetailsScreen";
import TabsNavigator, { TabsStackParamList } from "./TabNavigator";
import Portfolio from "../Screens/PortfolioScreen";
import Login from "../Screens/Registration/Login";
import Signup from "../Screens/Registration/Signup";
import Transaction from "../Screens/Transaction";
import SettingScreen from "../Screens/SettingScreen";
import GrowScreen from "../Screens/GrowScreen";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  details: undefined;
  login: undefined;
  signup: undefined;
  grow: undefined;
  transaction: undefined;
  settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="grow" component={GrowScreen} />
      <RootStack.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="transaction"
        component={Transaction}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="settings"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <RootStack.Screen name="portfolio" component={Portfolio} /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
