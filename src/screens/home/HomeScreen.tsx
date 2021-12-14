import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Ionicons} from '@expo/vector-icons';

export const HomeScreenOptions = {
  //   tabBarLabel: BottomTabs.EXPLORE,
  //tabBarIcon: function makeTabIcon(){ return <Icon name="rocket" size={30} color="#900" />},
  tabBarIcon: function makeTabIcon() {
    return <Text>|^|</Text>;
  },
};

export default function HomeScreen() {
  return (
    <ScrollView style={{margin:12}}>
      <Text>Hello</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>
        Would include dropdown to choose which house you want details on
      </Text>
      <Text style={{margin: 23, fontWeight: '700'}}>
        TOTAL COST OF WORK DONE: $Show value
      </Text>
      <Text style={{margin: 23}}>
        Include some, "if you bought your house in CURRENT YEAR it would cost
        $CALCULATED AMOUNT"
      </Text>
      <Text style={{margin: 23}}>
        Include native maps to allow person to get directions to said house
        (lets say, if they need to describe to a contractor or something dumb
        like that)
      </Text>
      <Text style={{margin: 23}}>
        Would need some sort of account creation probably so as to be able to
        store data about house and perhaps allow others to see certain
        information on house?
      </Text>
      <View style={{alignSelf:'center'}}>
        <Image
          style={{height: 300, width: 300}}
          source={{
            uri: 'https://thumbs.dreamstime.com/z/classic-house-flower-garden-751996.jpg',
          }}
        />
      </View>
    </ScrollView>
  );
}
