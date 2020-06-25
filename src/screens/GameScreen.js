import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import Numpad from 'components/NumPad';
import { getTwoRandomNumbers } from 'utils/utils';
import GameOverModal from 'popUpModals/GaveOverModal';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderTitle, RestartIcon } from 'components/GameScreen/NavComponents';
import GameLoader from 'components/GameScreen/GameLoader';
import * as styles from 'screens/styles/gameScreenStyles';
import GameContent from 'components/GameScreen/GameContent';
import {
  setShowGameOverModal,
  setIsActiveTimer,
  setScore,
  setTimeLeft,
  setGameStarted,
} from 'store/actions';
const operations = ['+', '-', 'X', '/'];

const operationsNames = {
  plus: '+',
  minus: '-',
  multiply: 'X',
  divide: '/',
};
const arcadeMin = 4;

const GameScreen = ({ navigation }) => {
  const {
    gameName,
    gameType,
    score,
    showGameOverModal,
    isGameStarted,
  } = useSelector(state => state.gameData);
  const { timeLeft, initTime } = useSelector(state => state.timer);
  const dispatch = useDispatch();

  const [numbers, setNumbers] = useState({ numberOne: 0, numberTwo: 0 });
  const [operation, setOperation] = useState('');
  const [userInput, setUserInput] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const expectedTime = useRef(0);
  const finalTime = useRef(0);
  const answerLength = answer.toString().length;
  const underlinesArr = new Array(answerLength - userInput.length).fill('_');
  const interval = 100;

  useEffect(() => {
    let timer = null;
    if (isGameStarted) {
      if (timeLeft === initTime) {
        dispatch(setIsActiveTimer(true));
        generateNewProblem(true);
        expectedTime.current = Date.now() + interval;
        finalTime.current = expectedTime.current + initTime * 1000 - interval;
        timer = setTimeout(() => handleTime(), interval);
      } else if (expectedTime.current === finalTime.current) {
        dispatch(setShowGameOverModal(true));
        dispatch(setIsActiveTimer(false));
        dispatch(setGameStarted(false));
        // get user and save score Readme
      } else {
        let dt = Date.now() - expectedTime.current;
        expectedTime.current = expectedTime.current + interval;
        const newInterval = Math.max(0, interval - dt);
        if (newInterval > 0) {
          timer = setTimeout(() => handleTime(), newInterval);
        } else {
          handleTime();
        }
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [timeLeft, isGameStarted]);

  const handleTime = () => {
    dispatch(setTimeLeft(timeLeft - 0.1));
  };

  const startNewGame = () => {
    dispatch(setShowGameOverModal(false));
    dispatch(setScore(0));
    dispatch(setTimeLeft(initTime));
    dispatch(setGameStarted(false));
    setIsNewRecord(false);
  };

  const generateNewProblem = newGame => {
    let newOperation = operations[0];
    if (gameType === 'mixed') {
      newOperation = operations[Math.floor(Math.random() * operations.length)];
    } else {
      newOperation = operationsNames[gameType];
    }
    const { numberOne, numberTwo, ans } = getTwoRandomNumbers(newOperation);
    setNumbers({ numberOne, numberTwo });
    setOperation(newOperation);
    setAnswer(ans);
    setUserInput([]);
    dispatch(setScore(newGame ? 0 : score + 1));
  };

  const handleUserInput = number => {
    if (number === -1) {
      const userInputTemp = [...userInput];
      userInputTemp.pop();
      setUserInput(userInputTemp);
    } else if (number === -2) {
      setUserInput([]);
    } else {
      const newInput =
        userInput.length === answerLength
          ? userInput
          : userInput.length > 0
          ? [...userInput, number]
          : [number];
      if (parseInt(newInput.join(''), 10) === answer) {
        if (gameName === 'arcade') {
          const newDuration = initTime - (score + 1) * 0.2;
          dispatch(
            setTimeLeft(newDuration < arcadeMin ? arcadeMin : newDuration),
          );
        }
        generateNewProblem();
      } else {
        setUserInput(newInput);
      }
    }
  };

  // functions in Readme

  const navigateTo = routeName => {
    dispatch(setShowGameOverModal(false));
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.GameScreenContainerStyle}>
      {isGameStarted ? (
        <GameContent
          numbers={numbers}
          operation={operation}
          answer={answer}
          underlinesArr={underlinesArr}
          userInput={userInput}
        />
      ) : (
        <GameLoader style={{ fontSize: 80, fontWeight: 'bold' }} />
      )}
      <Numpad handlePadPress={handleUserInput} />
      {showGameOverModal && (
        <GameOverModal
          score={score}
          modalVisible={showGameOverModal}
          navigateHome={() => navigateTo('Home')}
          restart={startNewGame}
          gameName={gameName === 'arcade' ? `Arcade (${gameType})` : gameName}
          isNewRecord={isNewRecord}
          navigateToRanking={() => navigateTo('LeaderBoard')}
        />
      )}
    </View>
  );
};

GameScreen.navigationOptions = () => {
  return {
    headerTitle: () => <HeaderTitle />,
    headerRight: () => <RestartIcon />,
  };
};

export default GameScreen;
