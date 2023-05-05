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
    width: '100%',
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
  servicesContainer: {
    justifyContent: 'space-between',
    gap: dimensions.offset.normalPlus,
    margin: dimensions.offset.small,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: scaleHorizontal(20),
  },

  bookContainer: {
    flex: 1,
    aspectRatio: 1,
  },
  image: {
    aspectRatio: 1,
  },
  bookWrapper: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.white,
    padding: dimensions.offset.normal,
    shadowColor: colors.black,
    borderRadius: dimensions.borderRadius.big,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
