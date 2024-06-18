import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Cards({ children,style }) {
  return <View style={[styles.card,style]}>{children}</View>;
}

export default Cards;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary_600,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});