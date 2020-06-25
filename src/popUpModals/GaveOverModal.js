import React from 'react';
import { Modal, View, Share } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';

const iconStyle = {
  marginRight: 10,
  marginLeft: 22,
};

const GameOverModal = ({
  modalVisible,
  score,
  navigateHome,
  restart,
  gameName,
  isNewRecord,
  navigateToRanking,
}) => {
  const shareOptions = {
    title: '',
    message: `I have scored ${score} in ${gameName}, Can you beat me?\n${'https://play.google.com/store/apps/details?id=com.zetamac'}`,
    subject: 'Game',
  };

  const onSharePress = () => Share.share(shareOptions);

  const ScoreTextStyle = { marginBottom: 5, color: COLORS.white };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={navigateHome}>
      <View style={ModalViewStyle}>
        <View style={ModalStyle}>
          <Text h3 style={{ color: COLORS.white }}>
            {gameName}
          </Text>
          <Text h4 style={ScoreTextStyle}>
            {isNewRecord ? 'New Record!' : `You scored: ${score}`}
          </Text>
          {isNewRecord && (
            <Text h3 style={{ color: COLORS.white }}>
              {score}
            </Text>
          )}
          <Button
            buttonStyle={modalButtonStyle()}
            titleProps={{
              style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
            }}
            icon={
              <Icon
                name="home-circle"
                size={30}
                color="white"
                style={iconStyle}
              />
            }
            title={'Home'}
            onPress={navigateHome}
          />
          <Button
            buttonStyle={modalButtonStyle()}
            titleProps={{
              style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
            }}
            icon={
              <Icon name="reload" size={30} color="white" style={iconStyle} />
            }
            title={'Restart'}
            onPress={restart}
          />
          <Button
            buttonStyle={modalButtonStyle()}
            titleProps={{
              style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
            }}
            icon={
              <Icon name="medal" size={30} color="white" style={iconStyle} />
            }
            title={'Ranking'}
            onPress={navigateToRanking}
          />
          <Button
            buttonStyle={modalButtonStyle({ marginBottom: '15%' })}
            titleProps={{
              style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
            }}
            icon={
              <Icon
                name="share-variant"
                size={30}
                color="white"
                style={iconStyle}
              />
            }
            title={'Share'}
            onPress={() => onSharePress()}
          />
        </View>
      </View>
    </Modal>
  );
};

const modalButtonStyle = styleObj => {
  const style = {
    width: 200,
    height: 50,
    marginTop: 15,
    backgroundColor: COLORS.purple,
    justifyContent: 'flex-start',
  };
  if (styleObj?.marginBottom) {
    style.marginBottom = styleObj.marginBottom;
  }
  return style;
};

const ModalViewStyle = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10%',
};

const ModalStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  width: 300,
  backgroundColor: COLORS.gold,
};

export default GameOverModal;
