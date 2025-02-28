import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// import Home from '../Components/Home';
import Goal from '../Components/Goal/Goal';
import Settings from '../Components/Settings/Settings';
// import SetGoalButton from '../Components/Goal/SetGoalButton';
// import SetGoalScreen from '../Components/Goal/SetGoalScreen';
import Navigation from '../Components/Goal/Navigation';
import HomeNavigation from '../Components/Home/HomeNavigation';
import SettingsNavigation from '../Components/Settings/SettingsNavigation';

const Tab = createBottomTabNavigator();
const homeName = "Home";
const goalName = "Goal";
const settingsName = "Settings";  

const Stack = createNativeStackNavigator();

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
                    tabBarActiveBackgroundColor: 'brown',
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 70 },
                })}
            >
                <Tab.Screen
                    name={homeName}
                    component={HomeNavigation}
                    options={{ headerShown: false }}
                />
                 <Tab.Screen
                    name={goalName}
                    component={Navigation}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name={settingsName}
                    component={SettingsNavigation}
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









// function MainContainer() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="Tabs" component={Tabs} />
//                 <Stack.Screen name="setgoal" component={SetGoalScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// const Tabs = () => {
//     return (
//         <Tab.Navigator
//             initialRouteName={homeName}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;
//                     let rn = route.name;

//                     if (rn === homeName) {
//                         iconName = focused ? 'home' : 'home-outline';
//                     } else if (rn === goalName) {
//                         iconName = focused ? 'log-in' : 'log-in-outline';
//                     } else if (rn === settingsName) {
//                         iconName = focused ? 'settings' : 'settings-outline';
//                     }

//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveBackgroundColor: 'brown',
//                 tabBarInactiveBackgroundColor: 'black',
//                 tabBarActiveTintColor: 'white',
//                 tabBarInactiveTintColor: 'white',
//                 tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
//                 tabBarStyle: { padding: 10, height: 70 },
//             })}
//         >
//             <Tab.Screen
//                 name={homeName}
//                 component={Home}
//                 options={{ headerShown: false }}
//             />
//             <Tab.Screen
//                 name={goalName}
//                 component={Goal}
//                 options={{ headerShown: false }}
//             />
//             <Tab.Screen
//                 name={settingsName}
//                 component={Settings}
//                 options={{ headerShown: false }}
//             />
//         </Tab.Navigator>
//     );
// };

// export default MainContainer;




