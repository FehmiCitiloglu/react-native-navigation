import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTitle = ({ title }) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{title}</Text>
        </View>
    )
}

export default SubTitle

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 8,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})
