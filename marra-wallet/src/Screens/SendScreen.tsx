import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ScreenGradient from "./ScreenGradient";
import Icons from "@expo/vector-icons/MaterialIcons";
import Cardgradient from "./Cardgradient";
import Checkbox from "expo-checkbox";
const IMAGE_1 =
  "https://static.vecteezy.com/system/resources/previews/013/166/553/original/3d-online-trading-with-phone-concept-icon-or-3d-online-business-investment-graph-on-phone-png.png";

const SendScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
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
                Send Sweat
              </Text>
            </View>
            {/* second */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                paddingVertical: 24,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white", fontFamily: "Regular" }}>
                  Enter Wallet
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
            {/* third */}

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="derr45kjggn6889aswsnnnnnrtto"
                placeholderTextColor={"white"}
                secureTextEntry={isChecked}
                style={{
                  width: "100%",
                  height: 50,
                }}
              />
              {/* <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "blue" : undefined}
              /> */}
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Regular",
                  paddingVertical: 14,
                }}
              >
                We found wallets with this addresses
              </Text>
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
          <View>
            <TouchableOpacity
              style={{
                bottom: 0,
                left: 0,
                borderRadius: 12,

                alignItems: "center",

                paddingHorizontal: 24,

                backgroundColor: "#35d6ed",

                paddingVertical: 14,
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

export default SendScreen;
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
