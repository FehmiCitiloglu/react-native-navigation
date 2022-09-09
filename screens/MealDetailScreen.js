import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'



const MealDetailScreen = ({ route }) => {
    const mealId = route.params.mealId


    const selectedMeal = MEALS.find((meal) => meal.id = mealId)


    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                textStyle={styles.detailText}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle title={"Ingredients"} />
                    <List data={selectedMeal.ingredients} />
                    <SubTitle title={"Steps"} />
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}


export default MealDetailScreen



const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
})













