import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

// import { useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'


const MealsOverviewScreen = ({ route }) => {

    // const route = useRoute()
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {

        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })



    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (<MealItem {...mealItemProps} />)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
