import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



const MealDetailScreen = ({ route }) => {
    const mealId = route.params.mealId
    return (
        <View>
            <Image />
            <Text>{mealId}</Text>
        </View>
    )
}


export default MealDetailScreen



const styles = StyleSheet.create({})













