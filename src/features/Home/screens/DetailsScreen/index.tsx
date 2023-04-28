import React, {FC, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../models/navigation';
import SuggestInput from '../../components/Suggest';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SuggestInput />
    </SafeAreaView>
  );
};
export default DetailsScreen;
