import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import ScreenGradient from "../ScreenGradient";
import { useTheme } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { colors } = useTheme();
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginVertical: 12,
                  color: "white",
                }}
              >
                Hi Welcome Back ! 👋
              </Text>
            </View>

            <View
              style={{
                marginBottom: 12,

                borderColor: colors.border,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                  color: "white",
                }}
              >
                New Password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  // borderColor: "grey",
                  // borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                  backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                }}
              >
                <TextInput
                  placeholder="New password"
                  placeholderTextColor="white"
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color="white" />
                  ) : (
                    <Ionicons name="eye" size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                  color: "white",
                }}
              >
                Confirm password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  // borderColor: "black",
                  // borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                  backgroundColor: "  rgba(0, 0, 0, 0.2) 100%",
                }}
              >
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor="white"
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color="white" />
                  ) : (
                    <Ionicons name="eye" size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 6,
              }}
            >
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "blue" : undefined}
              />

              <Text style={{ color: "white" }}>Remenber Me</Text>
            </View>

            <Button
              title="Login"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "grey",
                  marginHorizontal: 10,
                }}
              />
              <Text style={{ fontSize: 14, color: "white" }}>
                Or Login with
              </Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "grey",
                  marginHorizontal: 10,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: "grey",
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                {/* <Image
              source={require("../assets/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            /> */}

                <Text style={{ color: "white" }}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: "grey",
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                {/* <Image
              source={require("../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            /> */}

                <Text style={{ color: "white" }}>Google</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22,
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>
                Don't have an account ?{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("signup")}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "blue",
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  Register
                </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default Login;
