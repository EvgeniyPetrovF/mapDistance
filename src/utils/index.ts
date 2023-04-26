import {Permission, PermissionsAndroid, Platform} from 'react-native';

export function wait<T>(ms: number, value: T) {
  return new Promise<T>(resolve => setTimeout(resolve, ms, value));
}

export const getAndroidPermissions = async (
  permissionsAndroid: Permission[],
) => {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.requestMultiple(permissionsAndroid);
  }
};
