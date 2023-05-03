import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import RTNDatePicker from 'react-native-date-picker';
import CustomButton from '../CustomButton';
import TextWrapper from '../TextWrapper';
import {styles} from './styles';

type Props = {};

const DatePicker = (props: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TextWrapper>{date.toLocaleDateString()}</TextWrapper>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <TextWrapper>Icon</TextWrapper>
        </TouchableOpacity>
      </View>
      <RTNDatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DatePicker;
