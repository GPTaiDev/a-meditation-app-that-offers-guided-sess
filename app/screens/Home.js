import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Meditation App</Text>
      <Button
        title='Start Session'
        onPress={() => navigation.navigate('Session')}
      />
    </View>
  );
}