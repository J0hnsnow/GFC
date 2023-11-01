import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import ScreenGradient from "./ScreenGradient";
import Icons from "@expo/vector-icons/MaterialIcons";
import Cardgradient from "./Cardgradient";
const IMAGE_1 =
  "https://static.vecteezy.com/system/resources/previews/013/166/553/original/3d-online-trading-with-phone-concept-icon-or-3d-online-business-investment-graph-on-phone-png.png";

const ConfirmScreen = () => {
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 24,
              }}
            >
              <View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    paddingHorizontal: 14,

                    height: 40,
                    // width: 20,

                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 22,

                    backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                  }}
                >
                  <Text style={{ color: "white", fontFamily: "Regular" }}>
                    x
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* second */}

            <View>
              <Card />
            </View>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <TouchableOpacity
              style={{
                // flex: 1,

                top: 10,
                // width: 300,
                borderRadius: 12,
                // borderWidth: 1,
                // borderColor: colors.border,
                alignItems: "center",

                paddingHorizontal: 24,
                flexDirection: "row",

                backgroundColor: "#fff",

                paddingVertical: 14,
              }}
            >
              <Icons name="check-circle" style={{ color: "#35d6ed" }} />
              <Text style={{ fontFamily: "Regular" }}>d786038...f9b076</Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  paddingHorizontal: 24,
                  right: 0,
                  position: "absolute",
                }}
              >
                $24
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // flex: 1,
                height: 50,
                // width: 300,
                borderRadius: 12,
                // borderWidth: 1,
                // borderColor: colors.border,
                alignItems: "center",
                backgroundColor: "#35d6ed",
                paddingHorizontal: 24,
                flexDirection: "row",
                marginTop: 20,
                paddingVertical: 14,
              }}
            >
              <Icons name="publish" style={{ color: "white" }} />
              <Text style={{ fontFamily: "Regular", color: "white", left: 10 }}>
                Share your Wallet Transactions with friends
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 20,
                height: 40,
                marginTop: 20,

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,

                backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
              }}
            >
              <Text style={{ color: "white", fontFamily: "Regular" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default ConfirmScreen;
const Card = () => {
  return (
    <View style={{}}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: IMAGE_1 }}
          style={{
            width: 200,
            height: 200,
            aspectRatio: 1,
            // borderRadius: 32,
            borderColor: "white",
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            color: "white",
            fontFamily: "Bold",
            paddingVertical: 10,
            fontSize: 20,
          }}
        >
          Congratulations
        </Text>

        <Text
          style={{
            color: "white",
            fontFamily: "Medium",
            paddingVertical: 10,
          }}
        >
          Gift Coin sent sucessfully
        </Text>
      </View>
    </View>
  );
};
