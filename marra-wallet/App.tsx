import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";

import RootNavigator from "./src/Navigators/RootNavigator";
import { useMemo } from "react";
import { color } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";

export default function App() {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#f5f5f5",
        primary: "#E7007D",
        text: "black",
        border: "#D9D9D9",
      },
    }),
    []
  );
  const [fontsLoaded] = useFonts({
    Bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    Regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>

        {/* <Text style={{ fontFamily: "Bold", fontSize: 30 }}>Inter Black</Text>
        <Text style={{ fontFamily: "Regular", fontSize: 30 }}>HEY</Text>
        <Text style={{ fontFamily: "Medium", fontSize: 30 }}>HEY</Text> */}
        {/* <StatusBar style={colorScheme === "dark" ? "light" : "dark"} /> */}
        <StatusBar style="dark" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // background: {
  //   flex:1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 5,
  //   height: 200,
  //   width: 350,
  // },
});
