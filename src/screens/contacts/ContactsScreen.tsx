import React from 'react';
import {View, Text} from 'react-native';

export const ContactsScreenOptions = {
  //   tabBarLabel: BottomTabs.EXPLORE,
  //tabBarIcon: function makeTabIcon(){ return <Icon name="rocket" size={30} color="#900" />},
  tabBarIcon: function makeTabIcon() {
    return <Text>1-800</Text>;
  },
};

export default function ContactsScreen() {
  const fakeData = [
    {
      companyName: 'Corp Inc',
      phoneNumber: '701-471-****',
      mainContact: 'Bob Person',
      dateMeet: ' 2/23/24',
      specialties: ['roof', 'plumbing', 'sheds'],
    },
  ];
  return (
    <View style={{margin:12}}>
      {fakeData.map(data => {
        return (
          <>
            <Text>Company Name: {data.companyName}</Text>
            <Text>Phone Number: {data.phoneNumber}</Text>
            <Text>Primary Contact: {data.mainContact}</Text>
            <Text>Date of First Meeting: {data.dateMeet}</Text>
            <View style={{}}>
              <Text>Specialties:</Text>
              {data.specialties.map(specialty => {
                return <Text style={{marginLeft:6}}>*{specialty}</Text>;
              })}
            </View>
          </>
        );
      })}
    </View>
  );
}
