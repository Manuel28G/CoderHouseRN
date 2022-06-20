import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryScreen, ProductDetailScreen, ProductScreen } from "../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
