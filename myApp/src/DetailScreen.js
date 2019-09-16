import React, {Component} from 'react';
import {Text, View} from 'react-native';
import myJSON from './LocalFile/jsonData';

export default class DetailScreen extends Component {
  componentDidMount() {
    //   alert(JSON.stringify(myJSON.restaurant));
    const page = this.props.navigation.getParam('page', 'NO-ID');
    // alert(JSON.stringify(myJSON[page]));
  }

  render() {
    return (
      <View>
        <Text>DETAIL SCREEN</Text>
      </View>
    );
  }
}
