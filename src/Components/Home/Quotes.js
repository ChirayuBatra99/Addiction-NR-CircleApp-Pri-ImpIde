import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const quotes = {
    "quotes": [
      {
        "quote": "Believe you can overcome it, and you're halfway there."
      },
      {
        "quote": "Your life gets better when you choose to change."
      },
      {
        "quote": "The only limit to a better tomorrow is the doubt you feel today."
      },
      {
        "quote": "Don’t wait for the urge to pass; keep moving forward."
      },
      {
        "quote": "The first step to quitting is deciding to start."
      },
      {
        "quote": "You don’t have to be perfect to begin, but you have to begin to get better."
      },
      {
        "quote": "Happiness is found in freedom, not in addiction."
      },
      {
        "quote": "Your time is valuable; don’t waste it chained to a habit."
      },
      {
        "quote": "The best way to predict a smoke-free future is to create it."
      },
      {
        "quote": "It’s never too late to break free and breathe easier."
      },
      {
        "quote": "Start where you are, even if it’s one less cigarette today."
      },
      {
        "quote": "Believe in your strength to overcome cravings."
      },
      {
        "quote": "Don’t wait for the perfect moment to quit; make today the day."
      },
      {
        "quote": "Every effort you make to quit makes a difference."
      },
      {
        "quote": "Success comes to those who are too focused on living healthy."
      },
      {
        "quote": "Don’t let fear of withdrawal hold you back."
      },
      {
        "quote": "Discipline is the bridge to a smoke-free life."
      },
      {
        "quote": "Small daily victories lead to complete freedom."
      },
      {
        "quote": "Quitting is the sum of small efforts, repeated every day."
      },
      {
        "quote": "Freedom from smoking starts with the decision to quit."
      }
    ]
  }
  
  const Quotes = () => {
    const randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].quote;
    
    return (
      <View style={styles.containerStyles}>
        <Text style={styles.quoteText}>{randomQuote}</Text>
        <Icon name="stats-chart" size={40} color="blue" style={styles.statsIconStyles}/>
      </View>
    )
  }
  

export default Quotes

const styles = StyleSheet.create({
    containerStyles: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 10,
        // marginTop: '3%',
        width: '100%',
        // backgroundColor: 'green',
        alignItems: 'center',
        marginBottom: '10%',

    },
    quoteText: {
        width: '80%',
        fontSize: 20,
        fontWeight: 600,
        paddingRight: 3,
        color: 'white'
    },
    statsIconStyles: {
        height: '100%',
        width: '100%',
    }


})