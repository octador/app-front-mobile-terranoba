import React from 'react';
import { View, StyleSheet } from 'react-native';
import  Header  from '../../components/Header';
import  DashboardCard  from '../../components/DashbordCard';
import  FixedSection  from '../../components/FixedSection';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* <Header city="Paris" tempMin={10} tempMax={20} tempCurrent={16} />
      <FixedSection title="Tableu de bord">
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <DashboardCard title="Jardin" image={require('../../assets/jardin1.jpg')} />
          </View>
          <View style={styles.column}>
            <DashboardCard title="Arrosage" image={require('../../assets/arrosage.jpg')} />
          </View>
        </View>

        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <DashboardCard title="Test de sol" image={require('../../assets/test_sol.jpg')} />
          </View>
          <View style={styles.column}>
            <DashboardCard title="Planning" image={require('../../assets/legumes.jpg')} />
          </View>
        </View>
      </FixedSection> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 0,
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