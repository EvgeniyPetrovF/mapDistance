import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import MapView from '../../components/MapView';
import useAnimatedList from '../../hooks/useAnimatedList';
import useMapboxInit from '../../hooks/useMapboxInit';
import useMapLocation from '../../hooks/useMapLocation';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const pointCoordinates: [number, number] = [-122.0, 37.4219983];

const HomeScreen: FC<Props> = () => {
  const {isLoading} = useMapboxInit();
  const {onUserLocationUpdate} = useMapLocation(pointCoordinates);
  const {animatedOpacityStyle} = useAnimatedList({isLoading});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          <MapView
            coordinates={pointCoordinates}
            onUserLocationUpdate={onUserLocationUpdate}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
