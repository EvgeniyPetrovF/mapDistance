import {Dimensions, StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';
import {
  scaleHorizontal,
  scaleVertical,
} from '../../../../utils/scaleStyleValues';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginVertical: dimensions.offset.normal,
    paddingHorizontal: dimensions.offset.normal,
    gap: dimensions.offset.normal,
  },
  listItemContainer: {
    width: windowWidth,
  },
  listHeader: {
    fontSize: text.size.big,
    fontWeight: text.weight.bold,
    marginBottom: dimensions.offset.normal,
  },
  separator: {
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: dimensions.offset.small,
  },
  headerContainer: {
    alignItems: 'center',
  },
  tabBarContainer: {
    alignItems: 'center',
    marginBottom: dimensions.offset.small,
  },
  bottomOffset: {
    marginBottom: dimensions.offset.normal,
  },
  checkbox: {
    position: 'absolute',
    backgroundColor: colors.white,
    width: scaleHorizontal(40),
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  carImage: {
    aspectRatio: 1.3,
  },
});
