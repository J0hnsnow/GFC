import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import ScreenGradient from "./ScreenGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import WatchList from "../components/WatchList/WatchList";

const list = [
  {
    id: "1",
    icon: "icon 1",
    title: "HERE Earn",
    shortTitle: "0.36hNEAR",

    text: "$0.54",
  },
  {
    id: "2",
    icon: "icon 2",
    title: "Holding ",
    shortTitle: "0.25 NEAR",
    text: "$0.38",
  },
];

const AVATAR_URL =
  "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp";

const Categories = ["Transfer", "Buy", "Grow", "Swap"];
const Portfolio = ({}) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [listIndex, setListIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <ScreenGradient>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
          <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
            <Icons
              name="chevron-right"
              style={{
                color: "white",
                fontSize: 28,
                borderRadius: 50,
                backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "Bold",
                left: "40%",
              }}
            >
              Portfolio
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", gap: 20, paddingHorizontal: 24 }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Bold",
              }}
            >
              Crypto
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Bold",
              }}
            >
              NFT
            </Text>
          </View>
          <View style={{ gap: 5, paddingHorizontal: 24 }}>
            <Text
              style={{
                color: "white",
                fontFamily: "Medium",
              }}
            >
              Total balance-USD
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Bold",
              }}
            >
              $2.39
            </Text>
          </View>
          {/* flatlist */}
          <View>
            {/* <FlatList
              data={Categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 16,
                gap: 12,
              }}
              renderItem={({ item, index }) => {
                const isSelected = categoryIndex === index;
                return (
                  <TouchableOpacity
                    onPress={() => setCategoryIndex(index) }
                    style={{
                      backgroundColor: isSelected
                        ? colors.primary
                        : colors.card,
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                      borderRadius: 100,
                      borderWidth: isSelected ? 0 : 1,
                      borderColor: colors.border,
                    }}
                  >
                    <Text
                      style={{
                        color: isSelected ? colors.background : colors.text,
                        fontWeight: "600",
                        fontSize: 14,
                        opacity: isSelected ? 1 : 0.5,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              paddingHorizontal: 24,
            }}
          >
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("transaction")}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 12,
                  borderRadius: 100,

                  borderColor: colors.border,

                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Regular",
                    marginTop: 4,
                  }}
                >
                  Transfer
                </Text>
              </TouchableOpacity>
            </View>
            {/* button2  */}
            <View style={{}}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,

                  borderColor: colors.border,

                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Regular",
                    marginTop: 4,
                  }}
                >
                  Buy
                </Text>
              </View>
            </View>
            {/* botton 3 */}
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("grow")}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,

                  borderColor: colors.border,

                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Regular",
                    marginTop: 4,
                  }}
                >
                  Grow
                </Text>
              </TouchableOpacity>
            </View>
            {/* button 4 */}
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("swap")}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,

                  borderColor: colors.border,

                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Regular",
                    marginTop: 4,
                  }}
                >
                  Swap
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* coins */}
          <View>
            <WatchList />
          </View>
          {/* your porrtfolio card */}
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default Portfolio;

const Card = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 40, height: 40, margin: 7 }}
          className="rounded-full"
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/95/12/57/240_F_295125771_qVOz1TkErXCwaOna0KvquKR32H4ASyf9.jpg",
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontFamily: "Regular", color: "white" }}>
            {" "}
            Near
          </Text>
          <Text
            style={{
              color: "white",
              opacity: 0.5,
              fontSize: 16,
              fontFamily: "Regular",
            }}
          >
            {" "}
            0.61 . $1.5
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{ fontSize: 16, color: "white", left: 68, fontFamily: "Bold" }}
        >
          $0.92
        </Text>
        <Text style={{ fontSize: 16, color: "#F61491", fontFamily: "Regular" }}>
          {" "}
          -$0.04 .-4.37%
        </Text>
      </View>
    </View>
  );
};
