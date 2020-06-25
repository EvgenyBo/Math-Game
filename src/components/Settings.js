import React from 'react';
import { View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setGameType } from 'store/actions';

const GameSettings = () => {
  const dispatch = useDispatch();
  const { operations, gameType } = useSelector(state => state.gameData);

  const OperationButton = (opName, iconName) => {
    return (
      <Button
        buttonStyle={ButtonOperationStyle(operations[opName], gameType)}
        raised={operations[opName]}
        containerStyle={ButtonMargin}
        icon={<Icon name={iconName} size={46} color="white" />}
        onPress={() => dispatch(setGameType(opName))}
      />
    );
  };

  return (
    <>
      <View style={CheckBoxContainerStyle}>
        <CheckBox
          containerStyle={CheckBoxWidth}
          title="Mixed"
          checked={gameType === 'mixed'}
          checkedColor={COLORS.green}
          onPress={() => dispatch(setGameType('mixed'))}
          onIconPress={() => dispatch(setGameType('mixed'))}
        />
        <CheckBox
          checkedColor={COLORS.green}
          containerStyle={CheckBoxWidth}
          title="Single"
          checked={gameType !== 'mixed'}
          onPress={() => dispatch(setGameType('plus'))}
          onIconPress={() => dispatch(setGameType('plus'))}
        />
      </View>
      <View style={OperationContainerStyle}>
        {OperationButton('plus', 'plus')}
        {OperationButton('minus', 'minus')}
        {OperationButton('multiply', 'close')}
        {OperationButton('divide', 'division')}
      </View>
    </>
  );
};

const ButtonOperationStyle = (operation, gameType) => ({
  backgroundColor:
    operation || gameType === 'mixed' ? COLORS.silver : COLORS.gray,
  borderRadius: 6,
});
const ButtonMargin = { margin: 10 };
const CheckBoxWidth = { width: '35%' };
const CheckBoxContainerStyle = { flexDirection: 'row', marginBottom: 10 };
const OperationContainerStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
};

export default GameSettings;
