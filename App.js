console.ignoredYellowBox = ['Setting a timer'];
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MessageScreen from './screens/message.screen';
import ProfileScreen from './screens/profile.screen';
import PostScreen from './screens/post.screen';
import NotificationsScreen from './screens/notifications.screen';
import LoadingScreen from './screens/loading.screen';
import LoginScreen from './screens/login.screen';
import RegisterScreen from './screens/register.screen';
import HomeScreen from './screens/home.screen';

const AppTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
function App() {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: '#161F3D',
        inactiveTintColor: '#B8BBC4',
        showLabel: false,
      }}
    >
      <AppTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatboxes" size={24} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-add-circle"
              size={48}
              color={'#e8446a'}
              style={{
                shadowColor: '#e8446a',
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 10,
                shadowOpacity: 0.3,
              }}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" size={24} color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" size={24} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
