import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = ({ navigation, ...rest }) => {

    console.log("rest", rest)

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview");
        }
        return (
            <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
        )
    }



    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
