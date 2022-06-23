import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes/colors";
import { Text } from "react-native";

const BottomTabs = createBottomTabNavigator();
const LabelBottomTab = (focused, label) => {
  <Text
    style={{
      color: focused ? colors.primary : colors.secondary,
      fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
    }}
  >
    {label}
  </Text>;
};

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}
      initialRouteName="ShopTab"
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Shop"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "cart"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "cart" : "cart-outline"}
              size={20}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrderTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Orders"),
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "file-tray-full" : "file-tray-full-outline"}
              size={20}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
