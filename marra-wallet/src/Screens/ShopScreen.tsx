import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import ScreenGradient from "./ScreenGradient";

const ShopScreen = () => {
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text>Shop screen</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default ShopScreen;
