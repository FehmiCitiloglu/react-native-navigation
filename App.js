import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' }
      }}
    >
      <Drawer.Screen
        name={"Categories"}
        component={CategoriesScreen}
        options={{
          title: "All Categories"
        }}
      />
      <Drawer.Screen name={"Favorites"} component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name={"Drawer"}
            // component={CategoriesScreen}
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name={"MealsOverview"}
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.title
          //   return { title: catId }
          // }}
          />
          <Stack.Screen
            name={"MealDetail"}
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return (
            //       <Button title={"Tap me!"} onPress={ } />
            //     )
            //   }
            // }}
            options={{
              title: "About the Meal"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
