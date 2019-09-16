import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

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
        <Image source={{uri: item.thumbnail}} style={{height: 200}} />

        <View style={{padding: 15}}>
            <Text style={{fontSize: 22}}>{item.title}</Text>
        </View>

        <View style={{padding: 15}}>
            <Text style={{fontSize: 18, lineHeight: 26}}>{item.body}</Text>
        </View>
      </View>
    );
  }
}
