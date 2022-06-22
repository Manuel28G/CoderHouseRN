import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryScreen, ProductDetailScreen, ProductScreen } from "../screens";
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.secondary : colors.primary,
        },
        headerTintColor: isIOS ? colors.black : colors.white,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />

      <Stack.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
