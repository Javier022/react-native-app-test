import {StyleSheet} from 'react-native';
import {backGround} from '../../theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGround,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    borderRadius: 100,
    height: 90,
    width: 90,
  },
  imageContainer: {
    marginVertical: 15,
  },
});
