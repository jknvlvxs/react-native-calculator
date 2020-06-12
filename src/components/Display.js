import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from 'react-native-paper'

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValues} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(36, 36, 36, 0.9)',
        alignItems: 'flex-end'
    },
    displayValues: {
        fontSize: 60,
        color: '#F9F9F9'
    }
})