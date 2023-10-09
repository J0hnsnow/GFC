import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
interface CardgradientProps {
  children: ReactNode;
  headerPadding?: boolean;
}

const Cardgradient: React.FC<CardgradientProps> = ({
  children,
  headerPadding,
}) => {
  // const Cardgradient = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        //   #ACCEFF
        colors={["#0455bf", "#35d6ed"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        {children}
        {/* <Text style={styles.buttonText}>GRADIENT BACKGROUND</Text> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    // height: 250,
    // width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 22,
    justifyContent: "center",
  },
  buttonText: {
    // fontSize: 18,
    // fontFamily: "Gill Sans",
    // fontWeight: "bold",
    // textAlign: "center",
    // margin: 10,
    // color: "#ffffff",
    // backgroundColor: "transparent",
  },
});

export default Cardgradient;
