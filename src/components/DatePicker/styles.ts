import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: dimensions.offset.normal,
    borderRadius: dimensions.borderRadius.large,
  },
});
