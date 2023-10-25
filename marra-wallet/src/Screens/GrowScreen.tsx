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

const GrowScreen = () => {
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
                  Grow
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
            {/* card 1 */}
            <View>
              <View style={{ paddingVertical: 24 }}>
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
                      style={{
                        color: "white",
                        fontFamily: "Bold",
                        paddingVertical: 10,
                      }}
                    >
                      Grow as you earn
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
            </View>
            <View>
              <Card />
            </View>
            {/* button */}
            <TouchableOpacity
              style={{
                flex: 1,

                top: 10,

                borderRadius: 12,
                // borderWidth: 1,
                borderColor: colors.border,
                alignItems: "center",

                paddingHorizontal: 30,
                flexDirection: "row",

                backgroundColor: "#050730",
                // backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",

                paddingVertical: 14,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Regular" }}>
                Create a new grow jar
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default GrowScreen;
const Card = () => {
  return (
    // card 2
    <View style={{}}>
      <Cardgradient>
        <View
          style={{
            width: 300,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Image
            source={{ uri: IMAGE_1 }}
            style={{
              width: 100,
              height: 100,
              aspectRatio: 1,
              // borderRadius: 32,
              borderColor: "white",
            }}
            resizeMode="cover"
          />
          <View style={{ paddingVertical: 10 }}>
            <View style={{ paddingVertical: 5 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Regular",
                }}
              >
                {" "}
                The Loyal
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Bold",
                }}
              >
                {" "}
                16% per year
              </Text>
            </View>
            <View style={{ paddingVertical: 5 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Regular",
                }}
              >
                {" "}
                Ending on
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Bold",
                }}
              >
                {" "}
                Oct 20, 2024
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "Bold",
                paddingVertical: 10,
              }}
            >
              You'll earn
            </Text>
            <Text
              style={{
                color: "pink",
                fontFamily: "Bold",
                fontSize: 24,
              }}
            >
              12:16
            </Text>
          </View>
        </View>
      </Cardgradient>
    </View>
  );
};
