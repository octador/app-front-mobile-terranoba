import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  city: string;
  tempMin: number;
  tempMax: number;
  tempCurrent: number;
};

export default function Header({
  city,
  tempMin,
  tempMax,
  tempCurrent,
}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.range}>
          Min: {tempMin}°C / Max: {tempMax}°C
        </Text>
      </View>

      <View style={styles.circle}>
        <Text style={styles.current}>{tempCurrent}°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  city: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  range: {
    marginTop: 4,
    fontSize: 14,
    color: colors.muted,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  current: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});