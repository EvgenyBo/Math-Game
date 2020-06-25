import COLORS from 'styles/colors';

export const flexDirectionRaw = { flexDirection: 'row' };

export const GameScreenContainerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: COLORS.darkgray,
};

export const GameStyle = {
  flex: 3,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export const DrillTextStyle = {
  fontSize: 56,
  fontWeight: 'bold',
  color: 'white',
};

export const UserInputStyle = (num, index, answer) => ({
  fontSize: 40,
  fontWeight: 'bold',
  color: answer.toString()[index] === num.toString() ? 'green' : 'red',
});

export const UnderLineTextStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  color: 'white',
  paddingRight: 3,
};
