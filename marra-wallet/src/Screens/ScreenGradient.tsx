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
        "#2b52bd",
        "#0080bf",
        "#00acdf",
        "#35d6ed",

        // "#55d0ff",

        // "#1225f9",
        // "#2b52bd",
        // "#32a0df",

        // "#0455bf",

        // "#438ef2",

        // " rgba(4,249,242,1) 50%, ",
      ]}
      start={{ x: 0.1, y: 0.1 }}
      style={{
        flex: 1,

        borderRadius: 5,

        paddingTop: headerPadding ? headerHeight : 0,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenGradient;
