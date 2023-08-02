import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


export const LandingScreen = () => {
    return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
        <Text>Your Delivery charges</Text>
        <Text>Landing Screen</Text>

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
        backgroundColor: 'yellow',
    },
    deliveryIcon:{
        width:120,
        height:120, 
        marginTop: 10
    },
    footers: {
        flex: 1,
    }
});