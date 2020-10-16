import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./LoginScreen";
import AboutScreen from "./AboutScreen";
import SkillScreen from "./SkillScreen";
import ProjectScreen from "./ProjectScreen";
import AddScreen from "./AddScreen";

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen} />
    <LoginStack.Screen name="SkillScreen" component={SkillScreen} />
  </LoginStack.Navigator>
);
const Tabs = createBottomTabNavigator();
const TabsStackScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="SkillScreen" component={SkillScreen} />
    <Tabs.Screen name="ProjectScreen" component={ProjectScreen} />
    <Tabs.Screen name="AddScreen" component={AddScreen} />
  </Tabs.Navigator>
);
const Drawer = createDrawerNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="SkillScreen" component={TabsStackScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
