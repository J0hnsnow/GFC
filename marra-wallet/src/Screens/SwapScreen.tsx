import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ScreenGradient from "./ScreenGradient";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

const SwapScreen = () => {
  const { colors } = useTheme();
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView>
          <View
            style={{
              flex: 1,
              paddingVertical: 14,
              borderRadius: 12,
              top: 20,
              marginHorizontal: 20,
              //   alignItems: "center",
              paddingHorizontal: 24,
              backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
              // backgroundColor: "rgba(3, 4, 95, 0.2)",
              gap: 40,
              borderColor: colors.border,
            }}
          >
            <View
              style={{
                top: 2,
                paddingHorizontal: 24,
                paddingVertical: 14,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontFamily: "Bold" }}>Swap</Text>
              <Text style={{ color: "white", fontFamily: "Regular" }}>
                Trade Token in an instance
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  left: 60,
                  gap: 2,
                  //   right: 10,
                  top: 5,
                }}
              >
                <Icons
                  name="monetization-on"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />

                <Icons
                  name="bar-chart"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />
                <Icons
                  name="local-fire-department"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />
                <Icons
                  name="settings"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />
                <Icons
                  name="update"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />
                <Icons
                  name="cached"
                  size={28}
                  color="#35d6ed"
                  // style={{ opacity: 0.5 }}
                />
              </View>
            </View>
            {/* icons */}
            {/* first container */}
            <View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Icons
                    name="compare-arrows"
                    size={28}
                    color="#35d6ed"
                    style={{}}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "white", fontFamily: "Medium" }}>
                      ADA
                    </Text>
                    {/* dropdowm */}
                    <Icons
                      name="compare-arrows"
                      size={28}
                      color="#35d6ed"
                      style={{}}
                    />
                  </View>
                  <Icons
                    name="content-copy"
                    size={28}
                    color="#35d6ed"
                    style={{}}
                  />
                </View>
                <View style={{ gap: 10 }}>
                  <TouchableOpacity
                    style={{
                      // flex: 1,
                      //   width: 300,
                      top: 10,
                      height: 80,
                      borderRadius: 12,
                      // borderWidth: 1,
                      borderColor: colors.border,
                      // alignItems: "center",

                      paddingHorizontal: 30,
                      flexDirection: "row",

                      //   backgroundColor: "rgba(3, 4, 95, 0.2)",
                      backgroundColor: "#fff",
                      // backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",
                      marginHorizontal: 2,
                      paddingVertical: 14,
                    }}
                  >
                    <View style={{ left: 70, flexDirection: "row" }}>
                      <Icons
                        name="compare-arrows"
                        size={28}
                        color="#fff"
                        style={{}}
                      />
                      <Icons
                        name="compare-arrows"
                        size={28}
                        color="#fff"
                        style={{}}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      //   flex: 1,
                      width: 150,
                      // height:120,
                      borderRadius: 12,
                      // borderWidth: 1,
                      borderColor: colors.border,
                      alignItems: "center",
                      paddingHorizontal: 30,
                      flexDirection: "row",
                      left: 70,
                      top: 10,

                      // backgroundColor: "rgba(3, 4, 95, 0.2)",
                      backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",
                      marginHorizontal: 20,
                      paddingVertical: 14,
                    }}
                  >
                    <Text style={{ color: "white", fontFamily: "Regular" }}>
                      Very low risk
                    </Text>
                  </TouchableOpacity>
                </View>
                <Icons
                  name="compare-arrows"
                  size={28}
                  color="#fff"
                  style={{ left: "50%", top: 20 }}
                />
              </View>
            </View>
            {/* Second container */}
            <View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Icons
                    name="compare-arrows"
                    size={28}
                    color="#35d6ed"
                    style={{}}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "white", fontFamily: "Medium" }}>
                      ADA
                    </Text>
                    {/* dropdowm */}
                    <Icons
                      name="compare-arrows"
                      size={28}
                      color="#35d6ed"
                      style={{}}
                    />
                  </View>
                  <Icons
                    name="content-copy"
                    size={28}
                    color="#35d6ed"
                    style={{}}
                  />
                </View>
                <View style={{ gap: 10 }}>
                  <TouchableOpacity
                    style={{
                      // flex: 1,
                      //   width: 300,
                      top: 10,
                      height: 80,
                      borderRadius: 12,
                      // borderWidth: 1,
                      borderColor: colors.border,
                      // alignItems: "center",

                      paddingHorizontal: 30,
                      flexDirection: "row",

                      //   backgroundColor: "rgba(3, 4, 95, 0.2)",
                      backgroundColor: "#fff",
                      // backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",
                      marginHorizontal: 2,
                      paddingVertical: 14,
                    }}
                  >
                    <View style={{ left: 70, flexDirection: "row" }}>
                      <Icons
                        name="compare-arrows"
                        size={28}
                        color="#fff"
                        style={{}}
                      />
                      <Icons
                        name="compare-arrows"
                        size={28}
                        color="#fff"
                        style={{}}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      //   flex: 1,
                      width: 150,
                      // height:120,
                      borderRadius: 12,
                      // borderWidth: 1,
                      borderColor: colors.border,
                      alignItems: "center",
                      paddingHorizontal: 30,
                      flexDirection: "row",
                      left: 70,
                      top: 10,

                      // backgroundColor: "rgba(3, 4, 95, 0.2)",
                      backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",
                      marginHorizontal: 20,
                      paddingVertical: 14,
                    }}
                  >
                    <Text style={{ color: "white", fontFamily: "Regular" }}>
                      Some risk
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* last container */}
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text>Slipage Tolerance</Text>
                  <Icons
                    name="compare-arrows"
                    size={28}
                    color="#fff"
                    style={{}}
                  />
                </View>
                <Text style={{ fontFamily: "Regular", color: "white" }}>
                  1%
                </Text>
              </View>
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

                  //   backgroundColor: "rgba(3, 4, 95, 0.2)",

                  backgroundColor: "  rgba(0, 0, 0, 0.14) 100%",
                  marginHorizontal: 10,
                  paddingVertical: 14,
                }}
              >
                Connect Wallet
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default SwapScreen;
