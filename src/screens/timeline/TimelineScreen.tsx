import React from 'react';
import {View, Text} from 'react-native';

export const TimelineScreenOptions = {
  //   tabBarLabel: BottomTabs.EXPLORE,
  //tabBarIcon: function makeTabIcon(){ return <Icon name="rocket" size={30} color="#900" />},
  tabBarIcon: function makeTabIcon() {
    return <Text>|---|</Text>;
  },
};

export default function TimelineScreen() {
  return (
    <View style={{margin:12}}>
      <View>
        <Text>-Show dates of major events</Text>
        <Text>-scroll up and down</Text>
        <Text>-Take pics of receipts of home upgrades/service</Text>
        <Text>-Save contact information of companies whom serviced house</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'red',
              borderRadius: 80,
            }}>
            <Text style={{textAlign: 'center'}}>
              This would be image or default icon
            </Text>
          </View>
          <View style={{}}>
            <Text>*Name of Event</Text>
            <Text>*Date of Event</Text>
            <Text>*Price if any</Text>
            <Text>On press, go to detail section</Text>
          </View>
        </View>
        <View
          style={{
            height: 70,
            width: 6,
            backgroundColor: 'black',
            marginRight: 190,
          }}
        />
      </View>
    </View>
  );
}
