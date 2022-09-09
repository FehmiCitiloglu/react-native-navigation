import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


const IconButton = ({ onPress, icon, color }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})
