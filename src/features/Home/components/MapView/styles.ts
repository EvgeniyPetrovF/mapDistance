import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  subContainer: {
    height: 300,
    width: '100%',
    paddingHorizontal: dimensions.offset.small,
  },
  map: {
    flex: 1,
    flexShrink: 0,
    borderRadius: dimensions.borderRadius.large,
    overflow: 'hidden',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  street: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius.large,
    padding: dimensions.offset.small,
    position: 'absolute',
    top: dimensions.offset.tiny,
    left: dimensions.offset.normalPlus,
  },
  streetText: {
    color: colors.darkGray,
  },
  pointAnnotation: {
    height: 30,
    width: 30,
    borderRadius: dimensions.borderRadius.huge,
  },
});
