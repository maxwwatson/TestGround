import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Constants from './components/Constants';
import Contacts from './components/contacts';
import EventPage from './components/eventpage';
import * as SMS from 'expo-sms';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import GroupsGroups from "./components/groups-group";
import Groups from './components/groups';

const Tab = createMaterialBottomTabNavigator();

function GroupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Groups/>
    </View>
  );
}
function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message!</Text>
    </View>
  );
}
function EventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Event!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

// Tab stack navigator 
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Groups"
      barStyle={{ backgroundColor: '#d00000'}}
      shifting={true}
      labeled={true}
    >
      <Tab.Screen name="Groups" component={GroupScreen} 
      options={{
        tabBarColor: '#F48C06', 
        tabBarIcon: () => (
          <Ionicons name="people-outline" size={25} color='white'/>
        ),
      }} />

      <Tab.Screen name="Message" component={MessageScreen} 
      options={{
        tabBarColor: '#E85D04',
        tabBarIcon: () => (
          <AntDesign name="message1" size={25} color="white"/>
        ),
        }} />

      <Tab.Screen name="Events" component={EventScreen} 
      options={{
        tabBarColor: '#FF1F1F',
        tabBarIcon: () => (
          <AntDesign name="calendar" size={25} color="white"/>
        ),
        }} />

      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarColor: '#386fa4',
        tabBarIcon: () => (
          <Ionicons name="person-outline" size={25} color="white" />
        ),
        }} />
    </Tab.Navigator>
    
  )
}

const GroupStack = createStackNavigator();
function GroupStackScreen() {
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen name="Groups" component={GroupScreen} />
      <GroupStack.Screen name="GroupsGroups" component={GroupsGroups} />
    </GroupStack.Navigator>
  );
}


export default function App() {
  const [wind, setResourceType] = useState('posts')
  const [isAdded, setIsAdded] = useState(true)
  const [msgGroup, setmsgGroup] = useState([])
  
  return (
    <NavigationContainer>
      {/* <EventPage/> */}
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

  },
});
