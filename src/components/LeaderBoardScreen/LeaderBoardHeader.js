import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'components/LeaderBoardScreen/react-native-elements';
import * as styles from 'components/styles/leaderBoardStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';
import { useDispatch } from 'react-redux';
import { setGameType, setGameName, setInitTime } from 'store/actions';

const gameTypes = ['mixed', 'plus', 'minus', 'multiply', 'divide'];
const gameNames = ['arcade', '30seconds', '60seconds', '120seconds'];
const gameDurations = [10, 30, 60, 120];

const ordinal_suffix_of = i => {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
};

const LeaderBoardHeader = ({ userRank, myScore, gameType, gameName }) => {
  const dispatch = useDispatch();
  const setGameScoreBoard = (gameNameIndex, gameTypeIndex) => {
    dispatch(setGameType(gameTypes[gameTypeIndex]));
    dispatch(setGameName(gameNames[gameNameIndex]));
    dispatch(setInitTime(gameDurations[gameNameIndex]));
  };
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.HeaderContent}>
        <Text style={styles.RankText}>
          {userRank ? ordinal_suffix_of(userRank) : '-'}
        </Text>
        <Icon name="podium-gold" size={80} color="white" />
        <Text style={styles.ScoreText}>{myScore}</Text>
      </View>
      <ButtonGroup
        selectedButtonStyle={{ backgroundColor: COLORS.violet }}
        textStyle={{ fontWeight: 'bold' }}
        onPress={x => setGameScoreBoard(x, gameTypes.indexOf(gameType))}
        selectedIndex={gameNames.indexOf(gameName)}
        buttons={['Arcade', '30 Sec', '60 Sec', '120 Sec']}
        containerStyle={{ height: 30, width: '100%' }}
      />
      <ButtonGroup
        selectedButtonStyle={{ backgroundColor: COLORS.violet }}
        textStyle={{ fontWeight: 'bold' }}
        onPress={x => setGameScoreBoard(gameNames.indexOf(gameName), x)}
        selectedIndex={gameTypes.indexOf(gameType)}
        buttons={['Mixed', '+', '-', 'x', '/']}
        containerStyle={{ height: 30, width: '100%' }}
      />
    </View>
  );
};

export default LeaderBoardHeader;
