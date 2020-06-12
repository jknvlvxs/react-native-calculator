import React from 'react'
import {StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import {Text} from 'react-native-paper'

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.doubleButton);
    if (props.operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#F9F9F9',
        backgroundColor: '#FA8231'
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2,
    }
})