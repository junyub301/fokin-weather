import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Haze",
        subtitle: "just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#757F9A","#D7DDE8"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#757F9A","#D7DDE8"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#E6DADA","#274046"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Clouds: {
        iconName: "weather-hail",
        gradient: ["#ECE9E6","#FFFFFF"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#ED4264","#FFEDBC"],
        title: "Atmosphere",
        subtitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fceabb","#f8b500"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    }
    
}

export default function Weather({ temp,condition }) {
    console.log(temp)
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer} >
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName || "weather-sunset"}
                    color="white" 
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    ); 
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Clouds", 
        "Atmosphere", 
        "Clear", 
        "Haze"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"

    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom: 10,
        textAlign: "left"

    },
    subtitle : {
        fontWeight: "600",
        color : "white",
        fontSize: 24,
        textAlign:"left"
    }, 
    textContainer: {
        paddingHorizontal : 20,
        alignItems : "flex-start",
        justifyContent: "center",
        flex :1
    }
});