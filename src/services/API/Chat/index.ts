import {firebase, FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {IMessage} from '../../../models/types';

export interface UserInfo {
  code: string;
  invited: number;
}

enum DatabaseEndpoints {
  messages = 'messages/',
}

const db = firebase
  .app()
  .database(
    'https://store-app-382112-default-rtdb.europe-west1.firebasedatabase.app/',
  );

class ChatAPI {
  static sendMessage = async (message: IMessage) => {
    await db.ref(`${DatabaseEndpoints.messages}`).push(message);
  };

  static subscribeToChatMessages = <
    T extends (
      data: FirebaseDatabaseTypes.DataSnapshot,
      previousChildKey?: string | null | undefined,
    ) => void,
  >(
    callback: T,
  ) => {
    const ref = `${DatabaseEndpoints.messages}`;

    const onValueChange = db.ref(ref).on('value', callback);

    return () => db.ref(ref).off('value', onValueChange);
  };
}

export default ChatAPI;
