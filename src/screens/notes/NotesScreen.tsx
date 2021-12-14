import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Ionicons} from '@expo/vector-icons';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/GlobalButton';

export const NotesScreenOptions = {
  //   tabBarLabel: BottomTabs.EXPLORE,
  //tabBarIcon: function makeTabIcon(){ return <Icon name="rocket" size={30} color="#900" />},
  tabBarIcon: function makeTabIcon() {
    return <Text>|=|</Text>;
  },
};

export default function NotesScreen() {
  function handleOnPressSubmit() {
    Alert.alert('Nice Information homeowner!');
  }
  return (
    <View style={{}}>
      <View style={{margin: 24}}>
        <Text>
          This would include some sort of form to fill out your house you bought
          or work done on your house
        </Text>
        <TextInput
          placeholder="enter address"
          style={{borderColor: 'black', borderWidth: 2}}
        />
        <TextInput
          placeholder="enter price bought at"
          style={{borderColor: 'black', borderWidth: 2}}
        />
        <TextInput
          placeholder="enter date of purchase"
          style={{borderColor: 'black', borderWidth: 2}}
        />
      </View>
      <View style={{margin:12}}>
        <GlobalButton onPress={handleOnPressSubmit} buttonText="submit" />
      </View>
    </View>
  );
}
