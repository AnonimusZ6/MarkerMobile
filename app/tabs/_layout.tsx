import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs screenOptions={{
        tabBarActiveTintColor: "#ffd33d"
      }} />
      <Tabs.Screen name="index" options={{title: "Сканировать qr", tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? "qr-code" : "qr-code-outline"} color={color} size={24} />)}} />
      <Tabs.Screen
      name="allElement"
      options={{title: "Все детали", tabBarIcon: ({color, focused}) => 
      (<Ionicons name={focused ? "add" : "add-outline"} 
      color={color} size={24} />)}} />
    </Tabs>
  )
}
