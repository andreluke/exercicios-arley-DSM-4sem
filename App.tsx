import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/Pages/Home/Routes/screens/Home";
import Manha from "./src/Pages/Home/Routes/screens/Manha";
import Tarde from "./src/Pages/Home/Routes/screens/Tarde";
import Noite from "./src/Pages/Home/Routes/screens/Noite";
import { RootStackParamList } from './src/Pages/Home/Routes/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator<RootStackParamList>();
const App: React.FC = () => {
return (
<NavigationContainer>
<Tab.Navigator initialRouteName="Home">
<Tab.Screen name="Home" component={Home}
 options={{ title: 'Início' }} />
<Tab.Screen name="Morning" component={Manha}
 options={{ title: 'Saudação de manhã' }} />
<Tab.Screen name="Afternoon" component={Tarde}
 options={{ title: 'Saudação da tarde' }} />
<Tab.Screen name="Night" component={Noite}
 options={{ title: 'Saudação para dormir' }} />
</Tab.Navigator>
</NavigationContainer>
);
};
export default App;
