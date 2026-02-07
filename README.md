# 🌱 Terranoba - Application Mobile de Jardinage
*Une solution intelligente pour gérer et optimiser votre jardin.*

**Statut** : 🚀 **En développement actif**
**Version** : `0.1.0`
**Auteur** : [Joan Mutuon](https://github.com/octador)
**Organisation** : [Terranoba](https://github.com/octador)
**Licence** : [MIT](LICENSE)
**Technologies** : Expo, React Native, TypeScript, React Navigation

---

## 📋 Table des Matières
- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Stack Technique](#-stack-technique)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Structure du Projet](#-structure-du-projet)
- [Navigation](#-navigation)
- [Gestion d'État](#-gestion-détat)
- [Backend](#-backend)
- [Styles et Thème](#-styles-et-thème)
- [Assets](#-assets)
- [Scripts Disponibles](#-scripts-disponibles)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)

---

## 📌 À propos
**Terranoba** est une application mobile **cross-platform** (iOS/Android/Web) conçue pour aider les jardiniers à :
- **Suivre l'arrosage** de leurs plantes avec des rappels intelligents.
- **Diagnostiquer les maladies** des plantes via des images et descriptions.
- **Recevoir des conseils** personnalisés pour l'entretien du jardin.
- **Consulter des actualités** et astuces jardinage.
- **Gérer leur profil** et préférences.

---

## ✨ Fonctionnalités
| Module          | Description                                                                 | Statut               |
|-----------------|-----------------------------------------------------------------------------|----------------------|
| **Dashboard**   | Vue d'ensemble des métriques du jardin (humidité, température, alertes).    | ✅ Fonctionnel        |
| **Arrosage**    | Planification et historique des sessions d'arrosage.                        | ✅ Fonctionnel        |
| **Conseils**    | Base de connaissances sur les plantes et maladies.                          | ⏳ En développement   |
| **Profil**      | Personnalisation des préférences utilisateur.                              | ✅ Fonctionnel        |
| **Paramètres**  | Configuration de l'application (notifications, thème).                     | ✅ Fonctionnel        |

---

## 🛠 Stack Technique
| Catégorie          | Technologie                                  | Version          |
|--------------------|----------------------------------------------|------------------|
| **Frontend**       | React Native (Expo)                         | ~49.0.0         |
| **Navigation**     | React Navigation (Stack, Tabs)              | ^6.0.0          |
| **Gestion d'État** | (À définir : Zustand/Redux)                  | -                |
| **Backend**        | Node.js + Express                           | ^18.x           |
| **Base de Données**| (À définir : PostgreSQL/Firestore)           | -                |
| **Styling**        | React Native StyleSheet                      | -                |
| **Tests**          | (À définir : Jest/Testing Library)           | -                |

---

## ⚙️ Prérequis
- **Node.js** : Version ≥ 18.x ([Télécharger](https://nodejs.org/))
- **npm** ou **yarn** : Version ≥ 9.x
- **Expo CLI** : `npm install -g expo-cli`
- **Android Studio** (pour l'émulateur Android) ou **Xcode** (pour iOS)

---

## 🚀 Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/octador/app-front-mobile-terranoba.git
cd app-front-mobile-terranoba
```

### 2. Installer les Dépendances
```bash
npm install
```

### 3. configurer les variables d'environnement
```bash
cp .env.example .env
```

### 4. Lancer l'application
```bash
npx expo start
``` 
### 5. Structure du Projet

```bash
app-front-mobile-terranoba/
├── assets/              # Images et icônes
│   ├── adaptive-icon.png
│   ├── favicon.png
│   └── splash.png
├── src/
│   ├── components/      # Composants réutilisables
│   ├── navigation/      # Configuration de la navigation
│   │   ├── index.tsx
│   │   └── RootNavigator.tsx
│   ├── screens/         # Écrans de l'application
│   │   ├── DashboardScreen.tsx
│   │   ├── WateringScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── theme/           # Thème global
│   │   ├── colors.ts
│   │   └── index.ts
│   └── App.tsx          # Point d'entrée
├── .env                 # Variables d'environnement
├── app.json             # Configuration Expo
├── package.json
└── tsconfig.json
```

## 🧭 Navigation

La navigation est configurée avec **React Navigation** et inclut :

### Stack Navigator
Utilisé pour la navigation entre écrans avec une pile (ex: Dashboard → Arrosage → Détails).

### Tab Navigator
Utilisé pour les sections principales de l'application (ex: Accueil, Arrosage, Profil, Paramètres).

#### Exemple de configuration (`src/navigation/RootNavigator.tsx`) :

```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import WateringScreen from '../screens/WateringScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarIcon: 'home' }} />
      <Tab.Screen name="Arrosage" component={WateringScreen} options={{ tabBarIcon: 'water' }} />
      <Tab.Screen name="Profil" component={ProfileScreen} options={{ tabBarIcon: 'user' }} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      {/* Autres écrans (ex: Détails) */}
    </Stack.Navigator>
  );
}

---