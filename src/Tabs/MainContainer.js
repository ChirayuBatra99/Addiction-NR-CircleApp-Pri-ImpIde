import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StyleSheet } from 'react-native';

import Home from '../Components/Home';
import Goal from '../Components/Goal/Goal';
import Settings from '../Components/Settings/Settings';

const Tab = createBottomTabNavigator();
const homeName = "Home";
const goalName = "Goal";
const settingsName = "Settings";  

function MainContainer() {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === goalName) {
                            iconName = focused ? 'log-in' : 'log-in-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline' ;
                        }
                        

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveBackgroundColor: 'red',
                    tabBarInactiveBackgroundColor: 'green',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 70 },
                })}
            >
                <Tab.Screen
                    name={homeName}
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name={goalName}
                    component={Goal}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name={settingsName}
                    component={Settings}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;

const styles = StyleSheet.create({
    containerStyles: {
        backgroundColor: 'red',
    }
})