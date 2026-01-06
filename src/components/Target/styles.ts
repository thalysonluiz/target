import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fontFamily';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    paddingBottom: 16,
    gap: 12
  },
  content: {
    flex: 1,
    gap: 7
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.black
  },
  status: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  }
});