import React, { useState, useReducer }from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import * as Location from 'expo-location'
 
const screenWidth = Dimensions.get('screen').width

export const LandingScreen = () => {

    const [errorMsg, setErrorMsg] = useState("")
    //const [address, setAddress] = useState<Location.Address>()



    return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
            <View style={styles.addressContainer} >
                <Text style={styles.addressTitle}>Your Delivery Address</Text>
            </View>
            <Text style={styles.addressText}> Waiting for current Location</Text>
      </View>
      <View style={styles.footers} />
    </View>
    );

};

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: 'rgba{242,242,242,1}'
    },
    navigation: {
        flex:2,
    }, 
    body:{
        flex:9, 
        justifyContext: 'center',
        alignItems: 'center',
    },
    deliveryIcon:{
        width:120,
        height:120, 
        marginTop: 200
    },
    addressContainer: {
            width: screenWidth - 100,
            borderBottomColor: 'red',
            borderBottomWidth: 1,
            padding: 5,
            marginBottom: 20,
            alignItems: 'center'
    },
    addressTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#707070'
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: "#4f4f4f"
    },
    footers: {
        flex: 1,
    }
});