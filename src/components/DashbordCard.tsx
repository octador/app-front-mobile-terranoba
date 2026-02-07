import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../theme/colors';

type DashboardCardProps = {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;           // clic optionnel
  overlayColor?: string;           // couleur overlay personnalisable
  height?: number;                 // hauteur personnalisable
};

export default function DashboardCard({
  title,
  image,
  onPress,
  overlayColor,
  height = 135,
}: DashboardCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { height }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={[styles.overlay, { backgroundColor: overlayColor || 'rgba(255, 255, 255, 0.9)' }]}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: colors.background,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    flexShrink: 1, // évite que le texte dépasse
  },
});
