import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';

export default function NumPad({ handlePadPress }) {
  return (
    <View style={styles.Container}>
      <View style={styles.OneTwoThree}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(1)}>
          <Text style={styles.Number}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(2)}>
          <Text style={styles.Number}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(3)}>
          <Text style={styles.Number}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FourFiveSix}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(4)}>
          <Text style={styles.Number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(5)}>
          <Text style={styles.Number}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(6)}>
          <Text style={styles.Number}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SevenEightNine}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(7)}>
          <Text style={styles.Number}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(8)}>
          <Text style={styles.Number}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(9)}>
          <Text style={styles.Number}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.zeroBack}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(-2)}>
          <View>
            <IconM name="minus-circle" size={28} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(0)}>
          <Text style={styles.Number}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handlePadPress(-1)}>
          <View>
            <Icon name="backspace" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flex: 2,
  },
  OneTwoThree: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FourFiveSix: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SevenEightNine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  zeroBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Button: {
    width: '33%',
    backgroundColor: COLORS.darkblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.darkgrey,
  },
  Number: {
    color: 'white',
    fontSize: 24,
  },
});
