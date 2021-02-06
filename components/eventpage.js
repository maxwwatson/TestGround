import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, checkBox, SafeAreaView, sear} from 'react-native';

export default function EventPage () {

    const[searchText, setsearchText] = useState('');  // For search bar text


    // 1) What do you want to do page
    //full container view 
    const Event = () => {

        return (
            <View style={styles.container}>
                {/* Top header  */}
                <Text>What do you want to do today?</Text>
                {/* Search Bar */}
                <TextInput 
                    style={styles.input}
                    placeholder="search..."
                    onChangeText={text => setsearchText(text)}
                    
                />

            </View>
        )
    }

    // 2) Setting up of page

    return (
        <View>
            <Event/>
            <Text>hi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
})