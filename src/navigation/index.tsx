import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Updates from './screens/Updates';
import NotFound from './screens/NotFound';
import Dashboard from './screens/Dashbord';
import Garden from './screens/Garden';
import Watering from './screens/Watering';
import SoilTest from './screens/SoilTest';
import Planning from './screens/Planning';
import Tutorial from './screens/Tutorial';
import Plants from './screens/Plants';
import bell from '../assets/bell.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { HeaderButton, Text } from '@react-navigation/elements';

const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    sceneContainerStyle: { backgroundColor: '#ffffff' },
    tabBarStyle: { backgroundColor: '#ffffff', borderTopColor: '#e5e5e5' },
  },
  screens: {
    Dashboard: {
      screen: Dashboard,
      options: {
        title: 'Tableau de bord',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="view-dashboard" size={size} color={color} />
        ),
      },
    },
    SoilTest: {
      screen: SoilTest,
      options: {
        title: 'Test de sol',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="flask-outline" size={size} color={color} />
        ),
      },
    },
    Planning: {
      screen: Planning,
      options: {
        title: 'Planning',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" size={size} color={color} />
        ),
      },
    },
    Garden: {
      screen: Garden,
      options: {
        title: 'Jardin',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="tree" size={size} color={color} />
        ),
      },
    },
    Watering: {
      screen: Watering,
      options: {
        title: 'Arrosage',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="watering-can" size={size} color={color} />
        ),
      },
    },
    Tutorial: {
      screen: Tutorial,
      options: {
        title: 'Tutoriel',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-open" size={size} color={color} />
        ),
      },
    },
    Plants: {
      screen: Plants,
      options: {
        title: 'Plantes',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="leaf" size={size} color={color} />
        ),
      },
    },
    // Home: {
    //   screen: Home,
    //   options: {
    //     title: 'Feed',
    //     tabBarIcon: ({ color, size }) => (
    //       <MaterialCommunityIcons name="newspaper" size={size} color={color} />
    //     ),
    //   },
    // },
    // Updates: {
    //   screen: Updates,
    //   options: {
    //     tabBarIcon: ({ color, size }) => <Image source={bell} style={{ width: size, height: size, tintColor: color }} />,
    //   },
    // },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    contentStyle: { backgroundColor: '#ffffff' },
  },
  screens: {
    HomeTabs: { screen: HomeTabs, options: { title: 'Home', headerShown: false } },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: { user: (value) => value.replace(/^@/, '') },
        stringify: { user: (value) => `@${value}` },
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
    NotFound: { screen: NotFound, options: { title: '404' }, linking: { path: '*' } },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
