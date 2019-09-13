import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
            <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
        </View>
    );
  }
}

export default Layout;
