import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const item = this.props.navigation.getParam('item', null);

    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
}
