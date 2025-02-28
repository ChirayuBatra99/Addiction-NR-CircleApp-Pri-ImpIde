import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const options = [
  { id: '1', title: 'About Us', screen: 'aboutus' },
  { id: '2', title: 'Contact', screen: 'contact' },
  // { id: '3', title: 'Privacy Policy', screen:'a' },
  // { id: '4', title: 'Terms & Conditions', screen:'a' },
];

const OptionsList = () => {
  const navigation = useNavigation();
  
  const handlePress = (title) => {
    console.log(`Selected: ${title}`);
    // You can navigate or perform actions based on the selection
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate(item.screen)} >
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OptionsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // padding: 20,
    // backgroundColor: '#fff',
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    // borderTopWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
  },
});
