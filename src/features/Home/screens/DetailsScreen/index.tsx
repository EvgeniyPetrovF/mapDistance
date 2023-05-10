import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  PermissionsAndroid,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../../../../components/CustomButton';
import DatePicker from '../../../../components/DatePicker';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import {getAndroidPermissions} from '../../../../utils';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({route}) => {
  const {
    params: {bookItem},
  } = route;

  const [date, setDate] = useState(new Date());
  // const devices = useCameraDevices();
  // const device = devices.front;
  // const camera = useRef<Camera>(null);
  // const [tempPhoto, setTempPhoto] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const cameraPermission = await Camera.getCameraPermissionStatus();
  //     console.log(cameraPermission);
  //     if (cameraPermission !== 'authorized') {
  //       const newCameraPermission = await Camera.requestCameraPermission();
  //     }
  //     const newMicrophonePermission =
  //       await Camera.requestMicrophonePermission();

  //     getAndroidPermissions([
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //     ]);
  //   })();
  // }, []);
  // console.log(device);
  // if (!device) {
  //   return <Loader />;
  // }

  // const photo = async () => {
  //   console.log(camera.current);
  //   const photo = await camera.current?.takePhoto({
  //     qualityPrioritization: 'quality',
  //     flash: 'on',
  //   });
  //   setTempPhoto(photo);
  //   console.log(photo);
  // };
  // console.log(tempPhoto?.path);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* <Image
          source={{uri: `file://${tempPhoto?.path}`}}
          style={{width: '100%', height: 200}}
        />
        <Camera
          ref={camera}
          photo
          style={{width: '100%', height: 300}}
          device={device}
          isActive={true}
        /> */}
        <DatePicker date={date} setDate={setDate} />
        <CustomButton
          onPress={() => {
            bookItem(date);
          }}
          label="Save"
        />
      </View>
    </SafeAreaView>
  );
};
export default DetailsScreen;
