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

const ConfirmTransfer = () => {
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24, gap: 24 }}>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                gap: 10,
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
                    borderRadius: 40,

                    backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                  }}
                >
                  <Icons
                    name="chevron-right"
                    style={{
                      color: "white",
                      fontSize: 14,
                      borderRadius: 50,
                      // backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ color: "white", fontFamily: "Regular", left: 50 }}>
                Summary
              </Text>
            </View>
            {/* second */}
            <Cardgradient>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  paddingVertical: 24,
                }}
              >
                <View style={{ flexDirection: "row", width: 300 }}>
                  <Text style={{ color: "white", fontFamily: "Regular" }}>
                    To: d7hjyu678y...fugo788
                  </Text>
                  <Icons
                    name="chevron-right"
                    style={{
                      color: "white",
                      fontSize: 14,
                      borderRadius: 50,
                      backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                      alignSelf: "center",
                    }}
                  />
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
                      borderRadius: 40,

                      backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                    }}
                  >
                    <Icons
                      name="work"
                      style={{
                        color: "white",
                        fontSize: 14,
                        borderRadius: 50,
                        backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                        alignSelf: "center",
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Cardgradient>
            {/* third */}

            <Cardgradient>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  paddingVertical: 24,
                }}
              >
                <View>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: "white", fontFamily: "Bold" }}>
                      Sending...
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", width: 300 }}>
                    <Text style={{ color: "white", fontFamily: "Bold" }}>
                      Fee
                    </Text>
                    {/* <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        borderRadius: 50,
                        backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                        alignSelf: "center",
                        width: 10,
                      }}
                    >
                      !
                    </Text> */}
                    <Icons
                      name="chevron-right"
                      style={{
                        color: "white",
                        fontSize: 14,
                        borderRadius: 50,
                        backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                        alignSelf: "center",
                      }}
                    />
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
                    $24.02
                  </Text>
                  <Text style={{ color: "white", fontFamily: "Bold" }}>
                    $24.56
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  paddingVertical: 24,
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontFamily: "Bold" }}>Total</Text>
                  <Icons
                    name="chevron-right"
                    style={{
                      color: "white",
                      fontSize: 14,
                      borderRadius: 50,
                      backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                      alignSelf: "center",
                    }}
                  />
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
                      borderRadius: 40,

                      backgroundColor: "#fff",
                    }}
                  >
                    <Text style={{ fontFamily: "Bold" }}>$48.37</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Cardgradient>

            <TouchableOpacity
              style={{
                // flex: 1,
                top: 30,
                // width: 300,
                borderRadius: 12,
                // borderWidth: 1,
                // borderColor: colors.border,
                alignItems: "center",

                paddingHorizontal: 24,
                // flexDirection: "row",

                backgroundColor: "#fff",

                paddingVertical: 14,
              }}
            >
              <Text style={{ fontFamily: "Regular" }}>
                Only send to Near Wallet Addresses, Otherwise you might lose the
                assets
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ bottom: 0 }}>
            <TouchableOpacity
              style={{
                top: 50,
                left: 0,
                // position: "absolute",
                borderRadius: 12,

                alignItems: "center",

                paddingHorizontal: 24,

                backgroundColor: "#35d6ed",

                paddingVertical: 10,
              }}
            >
              <Text style={{ fontFamily: "Bold", color: "white" }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default ConfirmTransfer;
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
