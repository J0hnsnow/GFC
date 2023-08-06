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
  import { useTheme } from "@react-navigation/native";
  import { FontAwesome } from "@expo/vector-icons";
  
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

 
  const Transaction= () => {
    const { colors } = useTheme();
    // const [listIndex, setListIndex] = useState(0);
  
    return (
      <ScreenGradient>
        <ScrollView>
          <SafeAreaView style={{ paddingVertical:12, gap:4}}>
          <View
              style={{
                paddingHorizontal: 24,
                // paddingVertical: 24,
                flexDirection: "row",
                alignItems: "center",
                gap: 80,
                // justifyContent: "space-between",
                // marginLeft:24,
              }}
            >
            <Icons name="east" size={24} color={'white'}/>
             
                <Text style={{ color: "white" }}>Overview</Text>
               
            </View>
            <View style={{paddingHorizontal:24,gap:8}}>
                <Text style={{fontWeight:'700',fontSize:18, color:'white'}}>Information</Text>
                <Text style={{opacity:0.5,color:'white', fontSize:16}}>Interest paid</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight:'700',color:'white',fontSize:18}}>$0.0121</Text>
                <Text style={{opacity:0.5,color:'white',fontSize:18}}>0.008 NEAR</Text>
                </View>
                
            </View>
           
           <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:24}}>
            <View>
            <Text style={{opacity:0.5,color:'white',fontSize:16}}>Interest paid</Text>
            <Text style={{fontWeight:'700',color:'white',fontSize:18}}>$0.0121</Text>

            </View>
            <TouchableOpacity style={{paddingVertical:16, borderColor:colors.border,borderWidth:1, borderRadius:12,alignItems:'center', paddingHorizontal:24,backgroundColor:colors.primary}}>
                <Text style={{fontWeight:'700', color:'white'}}>Claim</Text>
            </TouchableOpacity>
           </View>

           <View>
            <TouchableOpacity
                style={{
                  flex: 1,
                
                  // width: 300,
                  // height:120,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 30,
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: 'rgba(3, 4, 95, 0.2)',
                  margin:20,
                  paddingVertical:14,
                  

                }}
              >
                    <Icons
                  name="error"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal:24 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    color: "white",
                    height:30

                  }}
                >
                  You can't stake less than 0.25 NEAR
                </Text>
            
              </TouchableOpacity>
              </View>
              <Card/>
              <Card/>
              <View>
                <Text style={{fontWeight:'600',fontSize:16, color: '#fff'}}>Transactions</Text>

              </View> 
              <View style={{
              borderRadius: 12,
              // marginHorizontal: 20,
              paddingHorizontal:24,
              borderColor: colors.border,
              // alignItems: "center",
              // backgroundColor: "  rgba(255, 255, 255, 0.14) 100%",
              backgroundColor: 'rgba(3, 4, 95, 0.2)',
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
                  // borderWidth={2}
                  // style={{ opacity: 0.5 }}
                />
                      <View style={{gap:8}}>
                        <Text style={{ color: "white" }}>{item.Title}</Text>
                        <Text style={{ color: "white" }}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{gap:8}}>
                      <Text style={{ color: "white" }}>{item.status}</Text>
                      <Text style={{ color: "white" }}>{item.text}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
               
              );
            }}
          />
           </View>
  
  










































             
           
          </SafeAreaView>
        </ScrollView>
      </ScreenGradient>
    );
  };
  
  export default Transaction;
  
  const Card = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal:20
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
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
              {" "}
              Near
            </Text>
            <Text style={{ color: "white", opacity: 0.5, fontSize: 16 }}>
              {" "}
              0.61 . $1.5
            </Text>
          </View>
        </View>
  
        <View>
          <Text style={{ fontSize: 16, color: "white" ,left:68 , fontWeight:'700'}}>$0.92</Text>
          <Text style={{ fontSize: 16, color: "#F61491" }}> -$0.04 .-4.37%</Text>
        </View>
      </View>
    );
  };
  