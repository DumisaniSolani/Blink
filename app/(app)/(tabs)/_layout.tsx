import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:"green", tabBarInactiveTintColor:"black"}}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="(wallet)"
        options={{
          headerShown: false,
          tabBarLabel: "My Wallet",
          tabBarIcon: ({color}) => <Ionicons name="wallet" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="(statements)"
        options={{
          headerShown: false,
          tabBarLabel: "History",
          tabBarIcon: ({color}) => <Ionicons name="copy" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: "My Profile",
          tabBarIcon: ({color}) => <Ionicons name="person" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="(support)"
        options={{
          headerShown: false,
          tabBarLabel: "Help",
          tabBarIcon: ({color}) => <Ionicons name="information" color={color} size={25} />,
        }}
      />
    </Tabs>
  );
}
