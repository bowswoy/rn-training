import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Axios from 'axios';

export default class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: '',
    };
  }

  _click() {
    Axios.post(
      'http://192.168.1.103/api/index.php',
      JSON.stringify(this.state),
    ).then(response => {
      // alert('Success');
      if(response.data == 'OK') {
        this.props.navigation.goBack();
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <View style={{marginBottom: 20}}>
          <Input
            label="Contact Name"
            placeholder="กรุณากรอกชื่อ"
            onChangeText={text => this.setState({name: text})}
          />
        </View>

        <View style={{marginBottom: 20}}>
          <Input
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            label="Contact Body"
            placeholder="กรุณากรอกข้อความติดต่อ"
            onChangeText={text => this.setState({body: text})}
          />
        </View>

        <View style={{marginBottom: 20}}>
          <Button title="Submit" onPress={() => this._click()} />
        </View>
      </View>
    );
  }
}
