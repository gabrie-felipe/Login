import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RegisterScreen } from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicial"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="HomeNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
          title: "Tela do aplicativo",
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Home3" component={HomeScreen} />
    </Tab.Navigator>
  );
};