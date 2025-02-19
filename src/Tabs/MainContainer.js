import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Components/Home';
import Login from '../Components/Login';

const Tab = createBottomTabNavigator();
const homeName = "Home";
const loginName = "Login";

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === loginName) {
                            iconName = focused ? 'log-in' : 'log-in-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 70 },
                })}
            >
                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={loginName} component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
