import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Cardgradient from "../../Screens/Cardgradient";

const IMAGE_1 =
  "https://static.vecteezy.com/system/resources/previews/013/166/553/original/3d-online-trading-with-phone-concept-icon-or-3d-online-business-investment-graph-on-phone-png.png";

const Card = () => {
  return (
    <View style={{ paddingHorizontal: 24, flex: 1 }}>
      <Cardgradient>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 24,
          }}
        >
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "rgba(3, 4, 95, 0.2)",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 70,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Medium" }}>
                Portfolio
              </Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: "Bold", color: "white", fontSize: 20 }}>
              Grow Investments
            </Text>
            <Text
              style={{
                fontFamily: "Regular",
                color: "white",
                fontSize: 14,
              }}
            >
              Whatever you dream Investment,
              <br /> Vote to see in the app
            </Text>

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "white",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 100,
              }}
            >
              <Text style={{ color: "black", fontFamily: "Medium" }}>
                Learn more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "rgba(3, 4, 95, 0.2)",
                height: 30,
                justifyContent: "center",
                borderRadius: 12,
                width: 70,
                right: 15,
              }}
            >
              <Text style={{ color: "white", fontFamily: "Regular" }}>
                Vote
              </Text>
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
      </Cardgradient>
    </View>
  );
};

export default Card;
