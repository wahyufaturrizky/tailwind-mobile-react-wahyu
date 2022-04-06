/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import tw from './lib/tailwind';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={tw`p-4 bg-primary-magenta rounded-lg`}>
        <Text style={tw`text-md text-center text-white`}>
          This Using Tailwind CSS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>This using stylescheet CSS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    backgroundColor: '#27AE60',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
