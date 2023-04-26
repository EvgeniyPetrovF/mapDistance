import {StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    padding: dimensions.offset.normal,
  },
  shadow: {
    borderRadius: dimensions.borderRadius.big,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: colors.black,
  },
  separator: {
    marginVertical: dimensions.offset.small,
  },
  listContainer: {
    padding: dimensions.offset.normal,
  },
  carHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servicesHeader: {
    marginVertical: dimensions.offset.tiny,
    fontSize: text.size.middle,
    fontWeight: text.weight.medium,
  },
  carModel: {
    fontSize: text.size.big,
  },
});
