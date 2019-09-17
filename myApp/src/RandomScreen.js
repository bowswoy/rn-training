import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Axios from 'axios';

export default class RandomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isRefresh: false
    };
  }

  _fetch() {
    this.setState({isRefresh: true});
    Axios.get('https://randomuser.me/api/?results=10&nat=us').then(response => {
      this.setState({data: response.data.results, isRefresh: false});
    });
  }

  componentDidMount() {
    this._fetch();
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 15,
          backgroundColor: '#eee',
          padding: 15,
          borderRadius: 12
        }}>
        <Image
          source={{uri: item.picture.large}}
          style={{width: 64, height: 64, borderRadius: 32}}
        />

        <View style={{flex: 1, flexDirection: 'column', marginLeft: 15}}>
          <Text style={{fontSize: 22}}>
            {item.name.title} {item.name.first} {item.name.last}
          </Text>
          <Text style={{fontSize: 16, color: '#0005'}}>{item.email}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        refreshing={this.state.isRefresh}
        onRefresh={() => this._fetch()}
        data={this.state.data}
        renderItem={object => this._renderItem(object)}
        keyExtractor={item => item.login.uuid}

      />
    );
  }
}
