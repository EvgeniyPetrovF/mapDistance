import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import TextWrapper from '../TextWrapper';
import {styles} from './styles';

type Props = {};

const CustomThumb = () => (
  <View style={styles.thumbContainer}>
    <View style={styles.thumb} />
  </View>
);

const RangeSlider = (props: Props) => {
  const [value, setValue] = useState<number[]>([3]);
  const [color, setColor] = useState('#e6ac86');

  useEffect(() => {
    const [currentValue] = value;

    switch (currentValue) {
      case 1:
        setColor('red');
        break;
      case 2:
        setColor('red');
        break;
      case 3:
        setColor('#e6ac86');
        break;
      case 4:
        setColor('lightgreen');
        break;
      case 5:
        setColor('green');
        break;
      default:
        setColor('#e6ac86');
        break;
    }
  }, [value]);

  return (
    <View>
      <Slider
        value={value}
        onValueChange={setValue}
        minimumValue={1}
        maximumValue={5}
        step={1}
        minimumTrackTintColor={color}
        renderThumbComponent={CustomThumb}
        maximumTrackTintColor={'white'}
      />
      <View style={styles.labelsContainer}>
        <TextWrapper>Ужасное</TextWrapper>
        <TextWrapper>Адекватное</TextWrapper>
        <TextWrapper>Прекрасное</TextWrapper>
      </View>
    </View>
  );
};

export default RangeSlider;
