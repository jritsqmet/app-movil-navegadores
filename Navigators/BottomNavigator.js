import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

//SCREENS
import DetallesScreen from '../Screens/DetallesScreen';
import HomeScreen from '../Screens/HomeScreen';
import PerfilScreen from '../Screens/PerfilScreen';

//ICONOS
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Home' >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={40} color="#042f8b" />
                    ),
                    headerTitle:'Inicio'
                }}
            />

            <Tab.Screen
                name='Detalles'
                component={DetallesScreen}
                options={{ 
                    tabBarIcon: ()=>(
                        <MaterialIcons name="details" size={40} color="#042f8b" />
                    )
                }}
            />

            <Tab.Screen name = 'Perfil' component={PerfilScreen}

                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={40} color="#042f8b" />
                    )
                }}
            
            
            />

        </Tab.Navigator>
    )
}

export default function BottomNavigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}