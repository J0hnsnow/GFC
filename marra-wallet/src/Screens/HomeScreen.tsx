import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

import WatchList from "../components/WatchList/WatchList";
import ScreenGradient from "./ScreenGradient";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "expo-blur";

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

const AVATAR_URL =
  "https://media.istockphoto.com/id/1445226966/photo/girl-friends-hug-and-travel-summer-vacation-outdoors-on-safari-diverse-happy-gen-z-women.webp?b=1&s=170667a&w=0&k=20&c=yJfrZFIisFCli7U-r7VC3XDtJR8dmHqARld0cLv9ARY=";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
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
                borderWidth: 1,
                backgroundColor: "#050730",

                // borderColor:colors.border,
              }}
            >
              <Text style={{ color: "white" }}>Balance $</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>0.00</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 24, gap: 16, height: 110 }}>
            <TouchableOpacity
              style={{
                // background: linear-gradient(253deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%);

                flex: 1,
                height: 200,
                borderRadius: 12,

                alignItems: "center",
                paddingHorizontal: 24,
                // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
                backgroundColor: "rgba(3, 4, 95, 0.2)",

                borderColor: colors.border,
                // "rgb(122, 49, 111)",
              }}
            >
              <View style={{ gap: 12 }}>
                <Text
                  style={{
                    top: 10,
                    // fontSize: 12,
                    color: "white",
                    left: 24,
                    fontWeight: "300",
                    // opacity: 0.5,
                  }}
                >
                  Your Portfolio
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Icons
                    name="attach-money"
                    size={24}
                    color="white"
                    // style={{ opacity: 0.5 }}
                  />
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 24,
                      color: "white",
                      fontWeight: "bold",
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
                    fontWeight: "300",
                  }}
                >
                  Monthly Profit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            {/* add request */}

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 24,
                gap: 14,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  // borderWidth: 1,
                  // borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 24,
                  flexDirection: "row",
                  gap: 12,
                  // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
                  // backgroundColor: "rgb(215, 187, 245)",
                  backgroundColor: "rgba(3, 4, 95, 0.2)",
                  // 'rgb(174, 216, 204)',
                  borderColor: colors.border,
                }}
              >
                <Icons
                  name="add-circle"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: "white",
                    fontWeight: "300",
                    // opacity: 0.5,
                  }}
                >
                  Add Money
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 80,
                  height: 80,
                  borderRadius: 12,

                  // borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 24,
                  flexDirection: "row",
                  borderColor: colors.border,
                  gap: 12,
                  // backgroundColor: "rgba(215, 187, 245, 0.5)",
                  // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",

                  backgroundColor: "rgba(3, 4, 95, 0.2)",
                }}
              >
                <Icons
                  name="cached"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: "white",
                    fontWeight: "300",
                  }}
                >
                  Request
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  // width: 300,
                  // height:120,
                  borderRadius: 12,
                  // borderWidth: 1,
                  borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 30,
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: "rgba(3, 4, 95, 0.2)",
                  // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
                  margin: 20,
                  paddingVertical: 14,
                }}
              >
                <Icons
                  name="compare-arrows"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal: 24 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Pay & transfer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Notifications */}
          <View style={{
              borderRadius: 12,
              marginHorizontal: 20,
              // paddingHorizontal:24,
              borderColor: colors.border,
              // alignItems: "center",
              // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
              backgroundColor: "rgba(3, 4, 95, 0.2)",
              }}>
              
          <FlatList
            data={notifications}
            keyExtractor={(notifications) => notifications.id}
            renderItem={({ item }) => {
              return (
           
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    margin:3,
                  
                  }}
                >
                  <Text style={{ color: "white",margin:7 }}>{item.date}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      {/* <Text style={{ color: "white" }}>{item.icon}</Text> */}
                      <Icons
                  name="south"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                      <View style={{gap:8}}>
                        <Text style={{ color: "white" }}>{item.Title}</Text>
                        <Text style={{ color: "white" }}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{gap:8}}>
                      <Text style={{ color: "white" }}>{item.points}</Text>
                      <Text style={{ color: "white" }}>{item.text}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
               
              );
            }}
          />
           </View>

          {/* notifications card */}
        

          {/* list of coins */}
          <WatchList />

          <TouchableOpacity
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
            <Text style={{ color: "white" }}>Add Favorites</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
        borderRadius: 12,
        // backgroundColor: "rgba(3, 4, 95, 0.2)",
        // borderWidth: 1,
        // borderColor: "gray",
        // borderRadius:22
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 5,
          flexDirection: "row",
        }}
      >
        <Icons
          name="south"
          size={24}
          color="white"
          style={{ paddingHorizontal: 24 }}
        />
        <View style={{ paddingVertical: 14, paddingHorizontal: 24 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              // opacity: 0.5,
            }}
          >
            Score
          </Text>
          <Text style={{ fontSize: 14, color: "white", opacity: 0.5 }}>
            03:09pm
          </Text>
        </View>
      </View>
      {/* last price */}
      <View>
        <Text style={{ fontSize: 18, color: "white" }}>5 points</Text>
        <Text style={{ color: "white", opacity: 0.5 }}>Daily Open</Text>
      </View>
    </View>
  );
};
