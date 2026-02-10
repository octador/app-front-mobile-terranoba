import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import  Home  from './screens/Home';
import  Profile  from './screens/Profile';
import  Settings  from './screens/Settings';
import  Updates  from './screens/Updates';
import  NotFound  from './screens/NotFound';
import Dashboard from './screens/Dashbord';
import Garden from './screens/Garden';
import Watering from './screens/Watering';

const HomeTabs = createBottomTabNavigator({
   screenOptions: {
    sceneContainerStyle: {
      backgroundColor: '#ffffff',
    },
    tabBarStyle: {
      backgroundColor: '#ffffff',
      borderTopColor: '#e5e5e5', // optionnel
    },
  },
  screens: {
    Dashboard: {
      screen: Dashboard,
      options: {
        title: 'Tableau de bord',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Dashboard si tu veux
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Garden: {
      screen: Garden,
      options: {
        title: 'Jardin',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Garden si tu veux
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Watering: {
      screen: Watering,
      options: {
        title: 'Arrosage',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Watering si tu veux
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Home: {
      screen: Home,
      options: {
        title: 'Feed',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    contentStyle: {
      backgroundColor: '#ffffff',
    },
  },
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
