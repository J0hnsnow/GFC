import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import Cardgradient from "../../Screens/Cardgradient";
import Transaction from "../../Screens/Transaction";
import { useNavigation } from "@react-navigation/native";

const IMAGE_1 =
  "https://static.vecteezy.com/system/resources/previews/013/166/553/original/3d-online-trading-with-phone-concept-icon-or-3d-online-business-investment-graph-on-phone-png.png";

const Card = () => {
  const navigation = useNavigation();
  const notifications = [
    {
      id: "1",
      icon: "icon 1",
      date: "June 28",
      Title: "Divided Currel",
      time: "06.47AM",
      status: "+$0.01",
      text: "0.01 NEAR",
    },
    {
      id: "2",
      icon: "icon 1",
      date: "June 28",
      Title: "Divided Currel",
      time: "06.47AM",
      status: "+$0.01",
      text: "0.01 NEAR",
    },
    {
      id: "3",
      icon: "icon 1",
      date: "June 28",
      Title: "Divided Currel",
      time: "06.47AM",
      status: "+$0.01",
      text: "0.01 NEAR",
    },
  ];
  return (
    <View style={{ paddingHorizontal: 24, flex: 1, gap: 24 }}>
      {/* card 1 */}
      <View>
        {/* <Cardgradient> */}
        <View
          style={{
            flex: 1,
            paddingVertical: 14,

            backgroundColor: " rgb(255, 255, 255) 100%",
            borderRadius: 22,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
            Previous Transactions
          </Text>
          <FlatList
            data={notifications}
            keyExtractor={(notifications) => notifications.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignContent: "center",
                    // backgroundColor: "rgba(3, 4, 95, 0.2)",
                    // width: 300,
                    paddingVertical: 10,
                    borderRadius: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <View style={{ gap: 2 }}>
                        <Text style={{ fontFamily: "Regular" }}>
                          {item.Title}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                          <Text
                            style={{
                              fontFamily: "Regular",
                            }}
                          >
                            {item.date},
                          </Text>
                          <Text style={{ fontFamily: "Regular" }}>
                            {item.time}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#35d6ed",

                        justifyContent: "center",
                        borderRadius: 12,
                        width: 60,
                      }}
                    >
                      <Text style={{ fontFamily: "Bold", color: "white" }}>
                        {item.status}
                      </Text>
                      {/* <Text style={{ color: "white", fontFamily: "Regular" }}>
                          {item.text}
                        </Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("transaction")}
            style={{
              alignItems: "center",
              backgroundColor: "#35d6ed",
              height: 30,
              justifyContent: "center",
              borderRadius: 12,
              width: 100,
              top: 5,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Bold" }}>All</Text>
          </TouchableOpacity>
        </View>
        {/* </Cardgradient> */}
      </View>
      {/* Notifications */}
      <View>
        {/* <Cardgradient> */}
        <View
          style={{
            flex: 1,
            paddingVertical: 14,

            backgroundColor: "rgb(255,255,255) 100%",
            borderRadius: 22,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
            Notifications
          </Text>
          <FlatList
            data={notifications}
            keyExtractor={(notifications) => notifications.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignContent: "center",
                    // backgroundColor: "rgba(3, 4, 95, 0.2)",
                    // width: 300,
                    paddingVertical: 10,
                    borderRadius: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <View style={{ gap: 2 }}>
                        <Text style={{ fontFamily: "Regular" }}>
                          {item.Title}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                          <Text
                            style={{
                              // color: "white",

                              fontFamily: "Regular",
                            }}
                          >
                            {item.date},
                          </Text>
                          <Text style={{ fontFamily: "Regular" }}>
                            {item.time}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#35d6ed",
                        // backgroundColor: "rgba(255, 255, 255, 0.2)",
                        // height: 20,
                        justifyContent: "center",
                        borderRadius: 12,
                        width: 70,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Bold",
                          color: "white",
                          // paddingVertical:
                        }}
                      >
                        {item.status}
                      </Text>
                      {/* <Text style={{ color: "white", fontFamily: "Regular" }}>
                          {item.text}
                        </Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            // onPress={() => navigation.navigate("transaction")}
            style={{
              alignItems: "center",
              backgroundColor: "#35d6ed",
              height: 30,
              justifyContent: "center",
              borderRadius: 12,
              width: 100,
              top: 5,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Bold" }}>All</Text>
          </TouchableOpacity>
        </View>
        {/* </Cardgradient> */}
      </View>

      {/* card 2 */}
      <View>
        {/* <Cardgradient> */}
        <View
          style={{
            flex: 1,
            paddingVertical: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "rgb(255,255,255) 100%",
            borderRadius: 22,
            paddingHorizontal: 24,
          }}
        >
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 90,
              }}
            >
              <Text style={{ fontFamily: "Bold", color: "white" }}>
                Portfolio
              </Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
              Grow Investments
            </Text>
            <Text
              style={{
                fontFamily: "Regular",

                fontSize: 14,
              }}
            >
              Whatever you dream Investment,
            </Text>
            <Text
              style={{
                fontFamily: "Regular",
                color: "white",
                fontSize: 14,
              }}
            >
              Vote to see in the app
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("grow")}
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 100,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Bold" }}>
                Learn more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 70,
                right: 15,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Bold" }}>Vote</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: IMAGE_1 }}
              style={{
                width: 100,
                aspectRatio: 1,
                // borderRadius: 32,
                borderColor: "white",
                top: 50,
                right: 40,
              }}
              resizeMode="cover"
            />
            {/* imageUrl="https://iwantyoutoknow.co.uk/wp-content/uploads/2018/03/new-combo3.jpg" */}
          </View>
        </View>
        {/* </Cardgradient> */}
      </View>
      {/* card 3 */}
      <View>
        {/* <Cardgradient> */}
        <View
          style={{
            flex: 1,
            paddingVertical: 14,

            backgroundColor: "rgb(255,255,255) 100%",
            borderRadius: 22,
            paddingHorizontal: 24,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 100,
              }}
            >
              <Text style={{ fontFamily: "Bold", color: "white" }}>
                Daily bonus
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 70,
                right: 15,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Bold" }}>Vote</Text>
            </TouchableOpacity>
          </View>
          {/* buttons */}
          <View style={{ paddingVertical: 12, flexDirection: "row" }}>
            <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
              Daily bonus
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingVertical: 12,
            }}
          >
            <View style={{ gap: 20, paddingVertical: 7 }}>
              <Text
                style={{
                  fontFamily: "Medium",
                  paddingVertical: 7,
                  // color: "white",
                  fontSize: 14,
                }}
              >
                Yesterday
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  paddingVertical: 7,
                  // color: "white",
                  fontSize: 14,
                }}
              >
                Today
              </Text>
            </View>
            <View style={{ gap: 20, right: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#35d6ed",

                  justifyContent: "center",
                  borderRadius: 12,
                  width: 60,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Bold",
                    paddingVertical: 7,
                  }}
                >
                  +$10.67
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#35d6ed",

                  justifyContent: "center",
                  borderRadius: 12,
                  width: 60,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Bold",
                    color: "white",
                    paddingVertical: 7,
                  }}
                >
                  +$10.67
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              alignItems: "center",
              // backgroundColor: "white",
              backgroundColor: "#35d6ed",
              height: 30,
              justifyContent: "center",
              borderRadius: 12,
              width: 100,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Medium" }}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          {/* imageUrl="https://iwantyoutoknow.co.uk/wp-content/uploads/2018/03/new-combo3.jpg" */}
        </View>
        {/* </Cardgradient> */}
      </View>

      {/* card 5 */}
      <View>
        {/* <Cardgradient> */}
        <View
          style={{
            flex: 1,
            paddingVertical: 14,

            backgroundColor: "rgb(255,255,255) 100%",
            borderRadius: 22,
            paddingHorizontal: 24,
            justifyContent: "space-between",
          }}
        >
          {/* buttons */}
          <View
            style={{
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: "Bold", fontSize: 20 }}>MileStones</Text>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#35d6ed",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 100,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Bold" }}>Goal</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingVertical: 12,
            }}
          >
            <View style={{ gap: 10, paddingVertical: 7 }}>
              <Text
                style={{
                  fontFamily: "Medium",
                  paddingVertical: 7,
                  // color: "white",
                  fontSize: 14,
                }}
              >
                Daily Streaks
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  paddingVertical: 7,
                  // color: "white",
                  fontSize: 14,
                }}
              >
                Login streaks
              </Text>
            </View>
            <View style={{ gap: 20, right: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#35d6ed",
                  paddingVertical: 7,
                  justifyContent: "center",
                  borderRadius: 12,
                  width: 60,
                }}
              >
                <Text style={{ fontFamily: "Bold", color: "white" }}>
                  4days
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#35d6ed",
                  paddingVertical: 7,
                  justifyContent: "center",
                  borderRadius: 12,
                  width: 60,
                }}
              >
                <Text style={{ fontFamily: "Bold", color: "white" }}>
                  3 days
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              alignItems: "center",
              // backgroundColor: "white",
              backgroundColor: "#35d6ed",
              height: 30,
              justifyContent: "center",
              borderRadius: 12,
              width: 100,
            }}
          >
            <Text style={{ color: "white", fontFamily: "Medium" }}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          {/* imageUrl="https://iwantyoutoknow.co.uk/wp-content/uploads/2018/03/new-combo3.jpg" */}
        </View>
        {/* </Cardgradient> */}
      </View>
    </View>
  );
};

export default Card;
