import React from 'components/GameScreen/react';
import Icon from 'components/GameScreen/react-native-vector-icons/MaterialCommunityIcons';
import {
  useSelector,
  useDispatch,
  batch,
} from 'components/GameScreen/react-redux';
import {
  setGameStarted,
  setTimeLeft,
} from 'components/GameScreen/store/actions';
import { Text } from 'components/GameScreen/react-native-elements';

export const RestartIcon = () => {
  const { initTime } = useSelector(state => state.timer);
  const dispatch = useDispatch();
  const restartGame = () => {
    batch(() => {
      dispatch(setTimeLeft(initTime));
      dispatch(setGameStarted(false));
    });
  };
  return (
    <Icon
      onPress={restartGame}
      name="cached"
      size={27}
      color="white"
      style={{ marginRight: 20 }}
    />
  );
};

export const HeaderTitle = () => {
  const { score } = useSelector(state => state.gameData);
  const { timeLeft } = useSelector(state => state.timer);
  return (
    <Text>{`Time: ${parseFloat(timeLeft).toFixed(1)} Score: ${score}`}</Text>
  );
};
