import { DefaultTheme, Theme } from '@react-navigation/native';

export const TerraTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,



    background: '#ffffff',   // fond global
    card: '#ffffff',         // headers / tabs
    border: '#e5e5e5',

    primary: '#2E7D32',      // vert Terra
    text: '#021c08',
    notification: '#2E7D32',
  },
};
