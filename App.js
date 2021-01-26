import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from './components/Constants';
import Contacts from './components/contacts';
import * as SMS from 'expo-sms';


export default function App() {
  const [wind, setResourceType] = useState('posts')
  const [isAdded, setIsAdded] = useState(true)
  const [msgGroup, setmsgGroup] = useState([])
  
  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'pink' : 'orange'
  }

  


  return (
    <View style={styles.container}>
      <Contacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

  },
});
