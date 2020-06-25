import React from 'components/GameScreen/react';
import { View } from 'react-native';
import { Text } from 'components/GameScreen/react-native-elements';
import * as styles from 'components/GameScreen/screens/styles/gameScreenStyles';

const GameContent = ({
  numbers,
  answer,
  operation,
  userInput,
  underlinesArr,
}) => {
  return (
    <View style={styles.GameStyle}>
      <Text style={styles.DrillTextStyle}>{`${numbers.numberOne} ${operation} ${
        numbers.numberTwo
      }`}</Text>
      <View style={styles.flexDirectionRaw}>
        {userInput.map((num, index) => {
          return (
            <Text key={index} style={styles.UserInputStyle(num, index, answer)}>
              {num}
            </Text>
          );
        })}
        {underlinesArr.map((x, i) => (
          <Text key={i} style={styles.UnderLineTextStyle}>
            {'_'}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default GameContent;
