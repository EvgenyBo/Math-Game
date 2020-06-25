import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';
import Settings from 'components/Settings';
import {
  setGameName,
  setInitTime,
  setTimeLeft,
  setGameStarted,
} from 'store/actions';

const iconStyle = {
  marginRight: 10,
};

const generalButtonStyle = {
  width: 250,
  height: 60,
  marginTop: 15,
  backgroundColor: COLORS.bisque,
};

const leaderBoardButtonStyle = color => ({
  width: 265,
  height: 50,
  marginTop: 30,
  marginBottom: 30,
  backgroundColor: color,
});

const MathGame = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        buttonStyle={{ ...leaderBoardButtonStyle }}
        titleProps={{
          style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
        }}
        icon={<Icon name="medal" size={30} color="white" style={iconStyle} />}
        title="Leader Board"
        onPress={() => {
          dispatch(setGameName('arcade'));
          navigation.navigate('LeaderBoard');
        }}
      />
      <Settings />
      <Button
        buttonStyle={{ ...generalButtonStyle }}
        titleProps={{
          style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
        }}
        title="Arcade"
        onPress={() => {
          dispatch(setGameName('arcade'));
          dispatch(setInitTime(10));
          dispatch(setTimeLeft(10));
          dispatch(setGameStarted(false));
          navigation.navigate('Game');
        }}
      />
      {[30, 60, 120].map(dur => (
        <Button
          key={dur}
          buttonStyle={{ ...generalButtonStyle }}
          titleProps={{
            style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
          }}
          title={`${dur} Seconds`}
          onPress={() => {
            dispatch(setGameName(`${dur}seconds`));
            dispatch(setInitTime(dur));
            dispatch(setTimeLeft(dur));
            dispatch(setGameStarted(false));
            navigation.navigate('Game');
          }}
        />
      ))}
    </>
  );
};

export default MathGame;
