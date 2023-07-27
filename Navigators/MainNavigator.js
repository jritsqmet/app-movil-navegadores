import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";


import HomeScreen from "../Screens/HomeScreen";
import PerfilScreen from "../Screens/PerfilScreen";
import DetallesScreen from "../Screens/DetallesScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown:false
            }}  
        >
            <Tab.Screen name="HOME" component={ HomeScreen }/>
            <Tab.Screen name="PERFIL" component={PerfilScreen} />
            <Tab.Screen name="DETALLES" component={DetallesScreen} />
        </Tab.Navigator>
    )
}

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="WELCOME" 
            /*
            screenOptions={{
                headerShown: false
            }}
            */
        >
            <Stack.Screen name='HOMETAB' component={ MyTabs } />
            <Stack.Screen name='WELCOME' component={ WelcomeScreen} />
        </Stack.Navigator>
    )
}

export default function MainNavigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
