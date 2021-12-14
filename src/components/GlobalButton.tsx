import React from 'react';
import {View, Text, Pressable, Alert, TouchableOpacity} from 'react-native';

export default function GlobalButton({onPress, buttonText}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: 'gray', borderRadius: 5, padding: 12}}>
      <Text
        style={{
          textTransform: 'uppercase',
          letterSpacing: 1.05,
          textAlign: 'center',
          color: 'white',
          fontWeight: '600',
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
