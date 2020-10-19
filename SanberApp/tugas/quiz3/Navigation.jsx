import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Chart from "./Chart";
import Message from "./Message";
import Profile from "./Profile";
import Splash from "./Splash";

const HomeStack = createStackNavigator();

const Tabs = createMaterialBottomTabNavigator();
const TabsStackScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    activeColor="#F77866"
    inactiveColor="#727C8E"
    barStyle={{ backgroundColor: "white" }}
  >
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Chart"
      component={Chart}
      options={{
        tabBarLabel: "Chart",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="store" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Message"
      component={Message}
      options={{
        tabBarLabel: "Message",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="email" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-circle"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="Splash" component={Splash} />
        <HomeStack.Screen name="Register" component={Register} />
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Home" component={TabsStackScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
