import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import LeaderboardList from 'components/LeaderBoardScreen/LeaderBoardList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStateValue } from '../state/state';
import LeaderBoardHeader from 'components/LeaderBoardScreen/LeaderBoardHeader';

const LeaderBoardScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ settings, firebase, user }, dispatch] = useStateValue();
  const { gameType, gameName, initDuration } = settings;
  const [data, setData] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [myScore, setMyScore] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    navigation.setParams({ initDuration });
    getLeaderBoard(gameName, gameType);
  }, [gameName, gameType]);

  const getLeaderBoard = (gName, gType) => {
    setIsLoading(true);
    setErrorMsg('');
    firebase
      .getDocs(gName, gType)
      .then(gameScores => {
        let usersData = [];
        if (gameScores._data) {
          usersData = Object.keys(gameScores._data).map(key => {
            if (key === user.uid) {
              setMyScore(gameScores._data[key].username);
            }
            return {
              name: gameScores._data[key].username,
              score: gameScores._data[key].score,
            };
          });
        }
        setIsLoading(false);
        setData(usersData);
      })
      .catch(error => {
        setIsLoading(false);
        setErrorMsg('Could not connect to database');
      });
  };

  const sort = dataToSort => {
    const sorted =
      dataToSort &&
      dataToSort.sort((item1, item2) => {
        return item2.score - item1.score;
      });
    let rank = sorted.findIndex(item => {
      return item.name === user.userName;
    });
    setUserRank(++rank);
    return sorted;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LeaderBoardHeader />
      {isLoading ? (
        <View style={{ marginTop: '50%' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <LeaderboardList
          labelBy={'name'}
          sortBy={'score'}
          data={data}
          icon={'iconUrl'}
          onRowPress={() => null}
          sort={sort}
        />
      )}
      <Text>{errorMsg}</Text>
    </View>
  );
};

const arrowLeftIcon = navigation => (
  <Icon
    onPress={() => navigation.navigate('Home')}
    name="arrow-left"
    size={25}
    color="white"
    style={{ marginLeft: 10 }}
  />
);

const playIcon = (navigation, initDuration) => (
  <Icon
    onPress={() => navigation.navigate('Game', { initDuration })}
    name="play"
    size={25}
    color="white"
    style={{ marginRight: 10 }}
  />
);

LeaderBoardScreen.navigationOptions = ({ navigation }) => {
  const initDuration = navigation.getParam('initDuration', 120);
  return {
    title: 'Math Master',
    headerLeft: () => arrowLeftIcon(navigation),
    headerRight: () => playIcon(navigation, initDuration),
  };
};

export default LeaderBoardScreen;
