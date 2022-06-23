import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab";
import { SafeAreaView } from "react-native";

const AppNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
