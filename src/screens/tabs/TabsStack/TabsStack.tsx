import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen, {HomeScreenOptions} from '../../home/HomeScreen';
import TimelineScreen, {
  TimelineScreenOptions,
} from '../../timeline/TimelineScreen';
import NotesScreen, {NotesScreenOptions} from '../../notes/NotesScreen';
import ContactsScreen, {
  ContactsScreenOptions,
} from '../../contacts/ContactsScreen';

export default function TabsStack() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOptions}></Tabs.Screen>
      <Tabs.Screen
        name="Notes"
        component={NotesScreen}
        options={NotesScreenOptions}></Tabs.Screen>
      <Tabs.Screen
        name="Timeline"
        component={TimelineScreen}
        options={TimelineScreenOptions}></Tabs.Screen>
      <Tabs.Screen
        name="Contacts"
        component={ContactsScreen}
        options={ContactsScreenOptions}></Tabs.Screen>
    </Tabs.Navigator>
  );
}
