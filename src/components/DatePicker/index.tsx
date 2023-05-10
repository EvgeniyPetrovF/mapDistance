import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import RTNDatePicker from 'react-native-date-picker';
import TextWrapper from '../TextWrapper';
import {styles} from './styles';

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

const DatePicker = ({date, setDate}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TextWrapper>{date?.toLocaleDateString()}</TextWrapper>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <TextWrapper>Icon</TextWrapper>
        </TouchableOpacity>
      </View>
      {date && (
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
      )}
    </>
  );
};

export default DatePicker;
