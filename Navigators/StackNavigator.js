import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCREENS
import HomeScreen from "../Screens/HomeScreen";
import DetallesScreen from "../Screens/DetallesScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import PerfilScreen from "../Screens/PerfilScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeStack"

        //screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='DetallesStack' component={DetallesScreen} />
            <Stack.Screen name='HomeStack' component={HomeScreen} />

            <Stack.Screen
                name='WelcomeStack'
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='PerfilStack'
                component={PerfilScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle:{ backgroundColor:'#7c62fe' }
                }}
            />
        </Stack.Navigator>
    )
}

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
