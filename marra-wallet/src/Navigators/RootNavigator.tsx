import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/DetailsScreen";
import TabsNavigator, { TabsStackParamList } from "./TabNavigator";
import Portfolio from "../Screens/PortfolioScreen";
import Login from "../Screens/Registration/Login";
import Signup from "../Screens/Registration/Signup";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  details: undefined;
  login: undefined;
  signup: undefined;
  portfolio: undefined;
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
      <RootStack.Screen name="details" component={DetailsScreen} />
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
      <RootStack.Screen name="portfolio" component={Portfolio} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
