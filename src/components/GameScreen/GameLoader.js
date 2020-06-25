import React, {
  useState,
  useEffect,
  useRef,
} from 'components/GameScreen/react';
import { Animated, View } from 'react-native';
import * as styles from 'components/GameScreen/screens/styles/gameScreenStyles';
import { useDispatch } from 'components/GameScreen/react-redux';
import { setGameStarted } from 'components/GameScreen/store/actions';

const GameLoader = props => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [loadNumber, setLoadNumber] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start(() => {
      if (loadNumber === 1) {
        dispatch(setGameStarted(true));
      } else {
        setLoadNumber(loadNumber - 1);
        setFadeAnim(new Animated.Value(0));
      }
    });
  }, [fadeAnim]);

  return (
    <View style={styles.GameStyle}>
      <Animated.Text // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        {loadNumber}
      </Animated.Text>
    </View>
  );
};

export default GameLoader;
