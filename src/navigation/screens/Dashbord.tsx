import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import DashboardCard from '../../components/DashbordCard';
import FixedSection from '../../components/FixedSection';

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header city="Paris" tempMin={10} tempMax={20} tempCurrent={16} />

        <FixedSection title="Tableau de bord">
          {/* Ligne 1 */}
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <DashboardCard
                title="Jardin"
                image={require('../../assets/jardin1.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Garden' })
                }
              />
            </View>
            <View style={styles.column}>
              <DashboardCard
                title="Arrosage"
                image={require('../../assets/arrosage.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Watering' })
                }
              />
            </View>
          </View>

          {/* Ligne 2 */}
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <DashboardCard
                title="Test de sol"
                image={require('../../assets/test_sol.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'SoilTest' })
                }
              />
            </View>
            <View style={styles.column}>
              <DashboardCard
                title="Planning"
                image={require('../../assets/legumes.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Planning' }) // créer l'écran Planning
                }
              />
            </View>
          </View>

          {/* Ligne 3 */}
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              <DashboardCard
                title="Tutoriels"
                image={require('../../assets/tutoriel.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Tutorial' })
                }
              />
            </View>
            <View style={styles.column}>
              <DashboardCard
                title="Maladies et parasites"
                image={require('../../assets/maladies.jpg')}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Planning' })
                }
              />
            </View>
          </View>
          <View style={styles.column}>
            <DashboardCard
              title="Plantes"
              image={require('../../assets/plante.jpg')}
              onPress={() =>
                navigation.navigate('HomeTabs', { screen: 'Plants' })
              }
            />
          </View>
         
        </FixedSection>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    width: '49%',
    marginBottom: 10,
  },
});
