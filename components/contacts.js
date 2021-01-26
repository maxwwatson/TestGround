import { sendSMSAsync } from 'expo-sms';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Constants from './Constants';
import * as SMS from 'expo-sms';

export default function Contacts () {
    const [msgGroup, setmsgGroup] = useState([]);
    const DATA = Constants.DATA;
    const[text, setText] = useState('');  // For search bar text

 
    const itemStyle = (item, index) => {
        if(item.isAdded = true) {
            item.isAdded = true;
           return {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            padding: 20,
            backgroundColor: 'white',
            color: 'black',
            fontSize: 16,
            marginBottom: 5,
            borderRadius: 25,
           }
        } else {
            return {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 0.5,
                padding: 20,
                backgroundColor: 'white',
                color: 'black',
                fontSize: 16,
                marginBottom: 5,
                borderRadius: 25,
            }
           
        }
    }

    // Press handler for contact buttons. Adds or removes person from msgGroup
    const pressHandler = (a) => {
        const existingNumbers = msgGroup.map((addedPerson) => addedPerson.number)
        
        if(! existingNumbers.includes(a.number)){
            setmsgGroup(msgGroup => [...msgGroup, a]);
            // setmsgGroup(msgGroup.a.isAdded = true);
        } 
        else{
            setmsgGroup(msgGroup => {
                return msgGroup.filter(contact => contact != a);
                // setmsgGroup(msgGroup.a.isAdded = false);
            })
        }

     textMsgGroup = async () => {
        const addresses = ["12042506199"]
        /// pulls every phone number msgGRoup 
        // const 
        const message = `Sup Pat`
        for(let i = 0; i <= msgGroup.length; i++){
            const status = await SMS.sendSMSAsync(addresses, message)
        }
        
        
        // const status1 = await SMS.sendSMSAsync(addresses, message)
        // const status2 = await SMS.sendSMSAsync(addresses, message)
        // const status3 = await SMS.sendSMSAsync(addresses, message)
        // const status4 = await SMS.sendSMSAsync(addresses, message)
        // const status5 = await SMS.sendSMSAsync(addresses, message)
        
        // const { result } = async () => SMS.sendSMSAsync(addresses, message)
    }

//     const isAvailable = await Expo.SMS.isAvailableAsync();
//     if (isAvailable) {
//   const { result } = await Expo.SMS.sendSMSAsync(['123456789'], 'test1234');
// }

    }
    return(
        <View>
            <View style={styles.container}>
            {/* Search Bar */}
            <TextInput 
                style={styles.input}
                placeholder="search..."
                onChangeText={text => setText(text)}
                defaultValue={text}
            />

            {/* Container with Message and View Group buttons  */}
            <View style={styles.buttonContainer}> 
                <TouchableOpacity 
                style={styles.buttons}
                onPress={this.textMsgGroup}>
                    <Text style={styles.msgButton}>Message</Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttons}
                    // Add on press ********************
                >   
                    {/* Get rid of numPeople. only show people.length */}
                    <Text style={styles.msgButton}>View Group</Text> 
                    <Text style={styles.msgButton}>({msgGroup.length})</Text>
                </TouchableOpacity>

                </View>
            </View>
        {/* // Contacts */}

            <View style={styles.container}>
                <Text style='green'>{msgGroup.length} hello guys</Text>
                <View style={itemStyle}>
                <FlatList 
                    data={DATA}
                    style={styles.flatListContainer}
                    keyExtractor={item => item.number}
                    renderItem={({ item, index }) => (
                        <View>
                        <TouchableOpacity 
                            style={itemStyle(item, index)}
                            onPress={() => pressHandler(item)}
                            >
                            <Text>
                                {item.name} #: {item.number}{'\n'}
                                {item.tags.join(" | ")}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )}
                    extraData={msgGroup}
                
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30

        
    },
    contactUnselected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        padding: 20,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 16,
        marginBottom: 5,
        borderRadius: 25,
    },
    // contactSelected: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     borderWidth: 0.5,
    //     padding: 20,
    //     backgroundColor: 'green',
    //     color: 'black',
    //     fontSize: 16,
    //     marginBottom: 5,
    //     borderRadius: 25,
    // },
    flatListContainer: {
        margin: 30
    },
    container: {

        backgroundColor: 'white',
        color: 'black',
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 80,
        paddingTop: 20,
        
        alignItems: 'stretch',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttons: {
        // backgroundColor: "pink",
        width: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1,

    },
    msgButton: {
        paddingBottom: 10,
        color: "black",
        fontSize: 20,
    }, 
})