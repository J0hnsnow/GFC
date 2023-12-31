import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

import WatchList from "../components/WatchList/WatchList";
import ScreenGradient from "./ScreenGradient";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "expo-blur";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/WatchList/CustomBackdrop";
import Cardgradient from "./Cardgradient";
import Card from "../components/WatchList/Card";
import { useNavigation } from "@react-navigation/native";

// notifications data
const notifications = [
  {
    id: "1",
    icon: "icon 1",
    date: "June 28",
    Title: "Score",
    time: "03.09PM",
    points: "5 points",
    text: "Daily Open",
  },
  {
    id: "1",
    icon: "icon 1",
    date: "June 28",
    Title: "Divided accrual",
    time: "09.37AM",
    points: "+$0.01",
    text: "0.01 NEAR",
  },
  {
    id: "1",
    icon: "icon 1",
    date: "June 28",
    Title: "c308f8c2qwee...qww",
    time: "03.09PM",
    points: "-$7.20",
    text: "4.40 NEAR",
  },
];
//profile image
const AVATAR_URL =
  "https://media.istockphoto.com/id/1445226966/photo/girl-friends-hug-and-travel-summer-vacation-outdoors-on-safari-diverse-happy-gen-z-women.webp?b=1&s=170667a&w=0&k=20&c=yJfrZFIisFCli7U-r7VC3XDtJR8dmHqARld0cLv9ARY=";

const HomeScreen = ({}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [categoryIndex, setCategoryIndex] = useState(0);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <ScreenGradient>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
          {/* nav */}
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 24,
              flexDirection: "row",
              alignItems: "center",
              gap: 120,
              justifyContent: "space-between",
              // marginLeft:24,
            }}
          >
            <TouchableOpacity
              onPress={handlePresentModalPress}

              // onPress={() => navigation.navigate("login")}
            >
              <Image
                source={{ uri: AVATAR_URL }}
                style={{
                  width: 42,
                  aspectRatio: 1,
                  borderRadius: 32,
                  borderColor: "white",
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                paddingHorizontal: 14,
                flexDirection: "row",
                height: 40,
                width: 20,

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                // borderWidth: 1,
                // backgroundColor: "#050730",
                backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",

                // borderColor:colors.border,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Regular" }}>
                Balance $
              </Text>
              <Text style={{ color: "white", fontFamily: "Bold" }}>0.00</Text>
            </TouchableOpacity>
          </View>
          {/* portfolio card on the homescreen */}

          <View
            style={{
              paddingHorizontal: 24,
              gap: 16,
              height: 110,
            }}
          >
            {/* <TouchableOpacity
                style={{
                  // background: linear-gradient(253deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%);

                  flex: 1,
                  height: 200,
                  borderRadius: 12,

                  alignItems: "center",
                  paddingHorizontal: 24,
                  // backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                  // backgroundColor: "rgba(3, 4, 95, 0.2)",

                  borderColor: colors.border,
                  // "rgb(122, 49, 111)",
                }}
              > */}
            <View
              style={{
                gap: 12,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  left: 90,
                }}
              >
                <Icons
                  name="attach-money"
                  size={28}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 24,
                    color: "white",
                    fontFamily: "Bold",
                    // opacity: 0.5,
                  }}
                >
                  450,937
                </Text>
              </View>
              <Text
                style={{
                  // fontSize: 12,
                  color: "white",
                  // opacity: 0.5,
                  paddingHorizontal: 24,
                  // bottom: 10,
                  fontFamily: "Medium",
                }}
              >
                Available 80.59
              </Text>

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "rgba(3, 4, 95, 0.2)",
                  height: 30,
                  justifyContent: "center",
                  borderRadius: 12,
                  width: 150,
                  margin: "auto",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("portfolio")}
                  style={{ flexDirection: "row", gap: 10 }}
                >
                  <Icons name="work" style={{ color: "white", fontSize: 14 }} />
                  <Text style={{ color: "white", fontFamily: "Medium" }}>
                    Portfolio
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
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            {/* </TouchableOpacity> */}
          </View>
          {/* four buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 24,
            }}
          >
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("transaction")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icons
                  name="compare-arrows"
                  style={{
                    color: "white",
                    fontSize: 28,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{ color: "white", fontFamily: "Regular", marginTop: 4 }}
              >
                Transfer
              </Text>
            </View>
            {/* button2  */}
            <View style={{}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icons
                  name="credit-card"
                  style={{
                    color: "white",
                    fontSize: 24,
                  }}
                />
              </View>
              <Text
                style={{ color: "white", fontFamily: "Regular", marginTop: 4 }}
              >
                Buy
              </Text>
            </View>
            {/* botton 3 */}
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("grow")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontFamily: "Bold", color: "white", fontSize: 24 }}
                >
                  %
                </Text>
              </TouchableOpacity>
              <Text
                style={{ color: "white", fontFamily: "Regular", marginTop: 4 }}
              >
                Invest
              </Text>
            </View>
            {/* button 4 */}
            <View style={{}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#35d6ed",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icons
                  name="cached"
                  style={{
                    color: "white",
                    fontSize: 28,
                  }}
                />
              </View>
              <Text
                style={{ color: "white", fontFamily: "Regular", marginTop: 4 }}
              >
                Trade
              </Text>
            </View>
          </View>
          {/* Investment Card */}
          <View style={{ gap: 24 }}>
            <Card />
          </View>

          {/* notifications card end*/}

          {/* coins card */}

          {/* <TouchableOpacity
            style={{
              paddingHorizontal: 14,
              flexDirection: "row",
              height: 40,
              // paddingVertical:"24",

              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              borderWidth: 1,
              backgroundColor: "#050730",
              // borderColor:colors.border,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Regular" }}>
              Add Favorites
            </Text>
          </TouchableOpacity> */}
        </SafeAreaView>
        {/* Bottom sheet modal */}
        <BottomSheetModal
          snapPoints={["45%"]}
          index={0}
          ref={bottomSheetModalRef}
          backdropComponent={(props) => <CustomBackdrop {...props} />}
          backgroundStyle={{
            borderRadius: 24,
            backgroundColor: colors.card,
          }}
          handleIndicatorStyle={{
            backgroundColor: colors.primary,
          }}
        >
          <View style={{}}>
            <View style={{ gap: 24, paddingHorizontal: 24 }}>
              <Text style={{ left: 50, fontSize: 16, fontFamily: "Regular" }}>
                WELCOME TO MARRA WALLET
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Regular" }}>
                Please Sign in
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("login")}
                style={{
                  paddingHorizontal: 14,
                  flexDirection: "row",
                  height: 50,
                  width: 300,
                  // paddingVertical:"24",

                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 22,
                  borderWidth: 1,
                  backgroundColor: "#050730",
                }}
              >
                <Text style={{ color: "white", fontFamily: "Regular" }}>
                  Login
                </Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 16 }}>
                You don't have an account? Please sign up
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("signup")}
                style={{
                  paddingHorizontal: 14,
                  flexDirection: "row",
                  height: 50,
                  width: 300,
                  // paddingVertical:"24",

                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 22,
                  borderWidth: 1,
                  backgroundColor: "#050730",
                }}
              >
                <Text style={{ color: "white", fontFamily: "Regular" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </ScreenGradient>
  );
};

export default HomeScreen;
