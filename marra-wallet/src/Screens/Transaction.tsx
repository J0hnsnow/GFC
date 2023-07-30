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
  
 
  const Transaction= () => {
    const { colors } = useTheme();
    // const [listIndex, setListIndex] = useState(0);
  
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
                  name="compare-arrows"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal:24 }}
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
           
          </SafeAreaView>
        </ScrollView>
      </ScreenGradient>
    );
  };
  
  export default Transaction;
  
  