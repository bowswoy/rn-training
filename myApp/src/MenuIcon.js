import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class MenuIcon extends Component {
    render() {
        return (
            <TouchableOpacity onLongPress={this.props.onLongPress} onPress={this.props.onPress} style={{width: 80, height: 90, alignItems: 'center'}}>
                <Icon reverse name={this.props.iconName} type="ionicon" color={this.props.iconColor} />
                <Text>{this.props.iconMenu}</Text>
            </TouchableOpacity>
        )
    }
}
