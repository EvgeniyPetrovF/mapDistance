import React, {FC, useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import MapViewCustom from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {Text} from 'react-native-svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DatePicker from '../../../../components/DatePicker';
import Loader from '../../../../components/Loader';
import RangeSlider from '../../../../components/RangeSlider';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import MapView from '../../components/MapView';
import SuggestInput from '../../components/Suggest';
import useAnimatedList from '../../hooks/useAnimatedList';
import useMapboxInit from '../../hooks/useMapboxInit';
import useMapLocation from '../../hooks/useMapLocation';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const pointCoordinates: [number, number][] = [
  [-122.0, 37.4219983],
  [-122.3, 37.4219983],
  [-122.1, 37.4219983],
  [-122.2, 37.4219983],
];

const HomeScreen: FC<Props> = ({navigation}) => {
  const {isLoading} = useMapboxInit();
  const {onUserLocationUpdate} = useMapLocation(pointCoordinates[0]);
  const {animatedOpacityStyle} = useAnimatedList({isLoading});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          {/* <MapView
            coordinates={pointCoordinates}
            onUserLocationUpdate={onUserLocationUpdate}
          /> */}
          <RangeSlider />
          <DatePicker />
          {/* <MapViewCustom
            style={{width: '100%', height: 500}}
            region={{
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
          /> */}
          {/* <SuggestInput /> */}
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details');
            }}>
            <TextWrapper>To another screen</TextWrapper>
          </TouchableOpacity> */}
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
