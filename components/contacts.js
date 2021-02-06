import { sendSMSAsync } from 'expo-sms';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Constants from './Constants';
import * as SMS from 'expo-sms';


export default function Contacts () {
    const [msgGroup, setmsgGroup] = useState([]);
    const DATA = Constants.DATA;
    const[text, setText] = useState('');  // For search bar text

    // WIP : to change colour on click 
    const itemStyle = (item, index) => {
        if( DATA[index].isAdded = true) {
           return {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            padding: 20,/*  */
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
                backgroundColor: 'green',
                color: 'black',
                fontSize: 16,
                marginBottom: 5,
                borderRadius: 25,
            }
           
        }
    }

    // Press handler for contact buttons. Adds or removes person from msgGroup
    const pressHandler = (a, index) => {
        // const to see if added person exists in msgGroup
        const existingNumbers = msgGroup.map((addedPerson) => addedPerson.number)
        let newDATA = [...msgGroup];
        console.log(newDATA);

        // if not in group, add to group
        if(! existingNumbers.includes(a.number)){
            DATA[index].isAdded = true;
                newDATA = [...newDATA, a];
                setmsgGroup(newDATA);
                console.log(newDATA);
                itemStyle(a,index);
            
        } 
        // if in group, remove 
        else{
            setmsgGroup(msgGroup => {
                DATA[index].isAdded = false;
                itemStyle(a, index);
                return msgGroup.filter(contact => contact != a);
                // setmsgGroup(msgGroup.a.isAdded = false);
            })
        }
    }

    // This async function, on msg button onPress, allows texting of contacts 
     textMsgGroup = async () => {
        let addresses = [];
        let message = `Hey everyone, lets chill today.`;
        
        // If statement - send group SMS to everyone selected
        if(msgGroup.length > 0) {
            msgGroup.forEach((item) => {
                addresses.push(item.number);
                console.log(addresses);
            })
            const status = await SMS.sendSMSAsync(addresses, message);
        }
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
                // textMsgGroup allow SMS texting to contacts 
                onPress={textMsgGroup}
                >
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
                <View style={itemStyle}>
                <FlatList 
                    data={DATA}
                    style={styles.flatListContainer}
                    keyExtractor={item => item.number}
                    renderItem={({ item, index }) => (
                        <View>
                            <TouchableOpacity 
                                style={itemStyle(item, index)}
                                onPress={() => pressHandler(item, index)}
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
        width: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    msgButton: {
        paddingBottom: 10,
        color: "black",
        fontSize: 20,
    }, 
})