import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator()

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
            name={"MealsCategories"}
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name={"MealsOverview"}
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   console.log(route)
          //   console.log(navigation)
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
