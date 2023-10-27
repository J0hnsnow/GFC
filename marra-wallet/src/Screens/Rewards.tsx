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

const Rewards = () => {
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
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  // onPress={() => navigation.navigate("transaction")}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: "#35d6ed",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icons
                    name="military-tech"
                    style={{
                      color: "white",
                      fontSize: 28,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{ color: "white", fontFamily: "Bold", top: 10 }}>
                  Rewards
                </Text>
              </View>
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
                    Balance $15.13
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* second */}
            <View
              style={{ flexDirection: "row", paddingVertical: 24, gap: 10 }}
            >
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
                  Prize drawn
                </Text>
              </TouchableOpacity>
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
                  Coming soon
                </Text>
              </TouchableOpacity>
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
                  Finished
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Card />
            </View>
          </View>
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
              // flexDirection: "row",

              backgroundColor: "#0455bf",

              paddingVertical: 14,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Regular" }}>
              Check out rewards
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default Rewards;
const Card = () => {
  return (
    <View style={{}}>
      <Cardgradient>
        <View style={{ width: 300 }}>
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
            style={{ color: "white", fontFamily: "Bold", paddingVertical: 10 }}
          >
            Best Bucket List
          </Text>

          <Text
            style={{
              color: "white",
              fontFamily: "Medium",
              paddingVertical: 10,
            }}
          >
            $10,000 beating your bucketlist
          </Text>
        </View>
      </Cardgradient>
    </View>
  );
};
