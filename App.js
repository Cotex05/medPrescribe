import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Badge, Icon } from 'react-native-elements';

// Screens
import TodayScreen from './Screens/TodayScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MedicationScreen from './Screens/MedicationScreen';
import AppointmentsScreen from './Screens/AppointmentsScreen';
import LiveChatScreen from './Screens/LiveChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Today') {
            iconName = 'volleyball';
          } else if (route.name === 'Medication') {
            iconName = 'medical-bag';
          } else if (route.name === 'Appointments') {
            iconName = 'calendar-clock';
          } else if (route.name === 'Live Chat') {
            iconName = 'chat-processing-outline';
            return <View><Badge status="error" badgeStyle={{ position: 'absolute', right: 2, top: 2, zIndex: 2 }} /><Icon type="material-community" name={iconName} size={size} color={color} /></View>;
          } else if (route.name === 'Profile') {
            return <Avatar rounded source={{ uri: "https://img.freepik.com/free-photo/side-portrait-white-man_53876-20499.jpg?size=626&ext=jpg" }} />
          }
          return <Icon type="material-community" name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#0c717d'
      })}>
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Medication" component={MedicationScreen} />
        <Tab.Screen name="Appointments" component={AppointmentsScreen} />
        <Tab.Screen name="Live Chat" component={LiveChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
