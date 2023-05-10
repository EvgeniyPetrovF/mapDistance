import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../../../../components/CustomButton';
import DatePicker from '../../../../components/DatePicker';
import {StackParamList} from '../../../../models/navigation';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({route}) => {
  const {
    params: {bookItem},
  } = route;

  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
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
