import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import MathGame from 'containers/MathGame';

const containerStyle = color => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: color,
});

const HomeScreen = ({ navigation }) => {
  const { themeMode } = useSelector(state => state.theme);

  return (
    <View style={containerStyle(themeMode)}>
      <MathGame navigation={navigation} />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Better Math',
  };
};

export default HomeScreen;
