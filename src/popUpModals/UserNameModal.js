import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'styles/colors';

const UserNameModal = ({ modalVisible, saveUserName }) => {
  const [userName, setUserName] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => null}>
      <View style={ModalViewStyle}>
        <View style={ModalStyle}>
          <Input
            containerStyle={{ marginTop: 20 }}
            placeholder="Username"
            onChangeText={text => setUserName(text)}
            leftIconContainerStyle={{ marginRight: 10 }}
            leftIcon={<Icon name="account-edit" size={30} color="white" />}
          />
          <Button
            buttonStyle={DoneButtonStyle}
            titleProps={{
              style: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
            }}
            title={'Done'}
            onPress={() => userName && saveUserName(userName)}
          />
        </View>
      </View>
    </Modal>
  );
};

const modalButtonStyle = {
  // EVG
  width: 200,
  height: 50,
  marginTop: 15,
  backgroundColor: COLORS.purple,
  justifyContent: 'flex-start',
};

const DoneButtonStyle = {
  ...modalButtonStyle,
  justifyContent: 'center',
  marginBottom: 20,
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

export default UserNameModal;
