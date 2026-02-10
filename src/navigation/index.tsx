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
import SoilTest from './screens/SoilTest';
import Planning from './screens/Planning';
import Tutorial from './screens/Tutorial';
import Plants from './screens/Plants';

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
    SoilTest: {    
      screen: SoilTest,
      options: {
        title: 'Test de sol',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône SoilTest si tu veux
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Planning: {
      screen: Planning,
      options: {
        title: 'Planning',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Planning si tu veux
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
    Tutorial: {
      screen: Tutorial,
      options: {
        title: 'Tutoriel',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Tutorial si tu veux
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Plants: {
      screen: Plants,
      options: {
        title: 'Plantes',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper} // remplace par ton icône Plants si tu veux
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
