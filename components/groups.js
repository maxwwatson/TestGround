import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import GroupsGroup from "./groups-group"; 
// import GroupsGroupAdd from "./groups-group-add"; 
// import GroupsGroupEdit from "./groups-group-edit"; 

function GoToButton({ screenName }) {
    const navigation = useNavigation();
    return (
        <Button
          title={`Go to ${screenName}`}
          onPress={() => navigation.navigate(screenName)}
        />
    );
    
}

// The Content within Stacks 
function Groups ({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Group screen</Text>
        <Button
          title="Go inside Group"
          onPress={() => navigation.navigate('GroupsGroup')}
        />
      </View>
    );
  }

  // Upon click a group
  function GroupsGroup ({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Contact Screen</Text>
        <Button
          title="Add Contact"
          onPress={() => navigation.navigate('GroupsGroupAdd')}
        />
        <Button
          title="Edit Contact"
          onPress={() => navigation.navigate('GroupsGroupEdit')}
        />
        {/* <GroupsGroup/> */}
      </View>
    );
  }

  // Upon click add contacts
  function GroupsGroupAdd ({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Edit Contact Screen</Text>
        <Button
          title="Add contact"
          onPress={() => navigation.navigate('GroupsGroup')}
        />
      </View>
    );
  }
// Upon click edit contact
  function GroupsGroupEdit ({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Group screen</Text>
        <Button
          title="edit contact"
          onPress={() => navigation.navigate('GroupsGroup')}
        />
      </View>
    );
  }

// The Stackssss
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="GroupsGroup" component={GroupsGroup} />
      <Stack.Screen name="GroupsGroupAdd" component={GroupsGroupEdit} />
      <Stack.Screen name="GroupsGroupEdit" component={GroupsGroupAdd} />
    </Stack.Navigator>
  );
}

export default function GroupScreen() {
    return (
        
            <MyStack />
        
    
    )
}