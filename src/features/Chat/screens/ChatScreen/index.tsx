import React, {FC, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../../../../components/CustomButton';
import Loader from '../../../../components/Loader';
import TextInputWrapper from '../../../../components/TextInputWrapper';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import {IMessage} from '../../../../models/types';
import ChatAPI from '../../../../services/API/Chat';
import useAnimatedList from '../../hooks/useAnimatedList';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Chat'>;

const myUserId = Math.trunc(Math.random() * 10000);

type NewType = FC<IMessage>;

const Message: NewType = ({userId, userName, message}) => {
  return (
    <View style={styles.messageContainer}>
      <TextWrapper>
        {userName}
        {userId}
      </TextWrapper>
      <TextWrapper>{message}</TextWrapper>
    </View>
  );
};

const keyExtractor = (item: IMessage) => {
  return `${item.id}`;
};

const renderItem: ListRenderItem<IMessage> = ({item}) => {
  return <Message {...item} />;
};

const ChatScreen: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [messageText, setMessageText] = useState('');
  const {animatedOpacityStyle} = useAnimatedList({isLoading});

  useEffect(() => {
    try {
      setIsLoading(true);
      const subscription = ChatAPI.subscribeToChatMessages(
        (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
          const messagesData = snapshot.val();

          setMessages(
            messagesData
              ? Object.values<IMessage>(messagesData).sort(
                  (a, b) => a.id - b.id,
                )
              : [],
          );
        },
      );

      return subscription;
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sendMessage = async () => {
    const newMessage = {
      message: messageText,
      id: messages?.length + 1,
      userId: myUserId,
      userName: 'Me',
    };

    try {
      await ChatAPI.sendMessage(newMessage);
      setMessages([...messages, newMessage]);
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          <FlatList
            data={messages}
            renderItem={renderItem}
            contentContainerStyle={[
              styles.servicesContainer,
              styles.tileWrapper,
              styles.shadow,
            ]}
            keyExtractor={keyExtractor}
          />
          <TextInputWrapper
            value={messageText}
            onChangeText={setMessageText}
            multiline
            placeholder="Write a message"
          />
          <CustomButton
            label={'Send Message'}
            onPress={sendMessage}
            disabled={!messageText}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;
