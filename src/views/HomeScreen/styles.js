import {StyleSheet} from 'react-native';
import {backGround, primaryColor} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGround,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: primaryColor,
    height: 45,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
