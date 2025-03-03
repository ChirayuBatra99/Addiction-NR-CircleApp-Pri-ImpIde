import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const quotes = {
  "quotes": [
  {
    "quote": "Small steps every day lead to big changes."
  },
  {
    "quote": "Your future is built on the habits you choose today."
  },
  {
    "quote": "Growth begins with a single step—start now."
  },
  {
    "quote": "Progress is progress, no matter how small."
  },
  {
    "quote": "Write your goals down—what gets written gets done."
  },
  {
    "quote": "The hardest part of change is starting. Keep going."
  },
  {
    "quote": "Each day is a new page in your story—make it count."
  },
  {
    "quote": "Your to-do list is a roadmap to a better version of you."
  },
  {
    "quote": "Discipline creates freedom—stay consistent."
  },
  {
    "quote": "Journaling clears the mind and fuels the soul."
  },
  {
    "quote": "Your progress is worth documenting—keep a journal."
  },
  {
    "quote": "You don’t need motivation; you need a plan."
  },
  {
    "quote": "One less bad habit today, one step closer to freedom."
  },
  {
    "quote": "Addictions don’t define you—your actions do."
  },
  {
    "quote": "A better life starts with better choices."
  },
  {
    "quote": "You are stronger than your cravings."
  },
  {
    "quote": "Small wins lead to lasting change."
  },
  {
    "quote": "Success is built daily—write, plan, and take action."
  },
  {
    "quote": "Break free, step forward, and own your journey."
  },
  {
    "quote": "Your habits shape your future—choose them wisely."
  }
]

}

const Quotes = () => {
  const navigation = useNavigation();

  const randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].quote;

  return (
    <TouchableOpacity>
      <View style={styles.containerStyles}>
        <Text style={styles.quoteText}>"{randomQuote}"</Text>
        <Icon name="stats-chart" size={40} color="#6c8270" style={styles.statsIconStyles} onPress={() => navigation.navigate("milestones")} />
      </View>
    </TouchableOpacity>

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
    width: '85%',
    fontSize: 20,
    fontWeight: 600,
    paddingRight: 7,
    color: 'white'
  },
  statsIconStyles: {
    height: '100%',
    width: '100%',
  }


})