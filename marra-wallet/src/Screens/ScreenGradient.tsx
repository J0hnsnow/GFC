import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { ReactNode } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface ScreenGradientProps {
  children: ReactNode;
  headerPadding?: boolean;
}

const ScreenGradient: React.FC<ScreenGradientProps> = ({
  children,
  headerPadding,
}) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={[
        // "rgba(37,47,152,1)30% ",
        "#0455bf",
        // "#1e69cb",
        // "#2d78db",
        "#438ef2",

        " rgba(4,249,242,1) 50%, ",
      ]}
      // colors={[ ' rgba(51,15,176,1) 1.5%','rgba(33,155,161,1) 91.6% )' ]}
      // colors={['rgba(93,52,236,1) 100.2%','rgba(62,161,219,1) 11.2%',]}

      start={{ x: 0.1, y: 0.1 }}
      style={{
        flex: 1,

        borderRadius: 5,
        // height: 20,
        // width: 350,
        paddingTop: headerPadding ? headerHeight : 0,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenGradient;
