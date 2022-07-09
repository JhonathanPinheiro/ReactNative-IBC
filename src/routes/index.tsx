import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import HomePage from "../pages/HomePage";
import SemanaPage from "../pages/SemanaPage";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Semana"
        component={SemanaPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
