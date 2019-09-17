import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

export default class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>

        <View style={{marginBottom: 20}}>
          <Input label="Contact Name" placeholder="กรุณากรอกชื่อ" />
        </View>

        <View style={{marginBottom: 20}}>
          <Input
            multiline={true}
            numberOfLines={4}
            textAlignVertical='top'
            label="Contact Body"
            placeholder="กรุณากรอกข้อความติดต่อ"
          />
        </View>

        <View style={{marginBottom: 20}}>
            <Button title="Submit" onPress={() => alert('sa')} />
        </View>

        <View style={{marginBottom: 20}}><Text>Name</Text></View>
        <View style={{marginBottom: 20}}><Text>Body</Text></View>

      </View>
    );
  }
}
