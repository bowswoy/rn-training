import React, {Component} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Axios from 'axios';

export default class MOJScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isRefresh: false,
    };
  }

  _fetch() {
    this.setState({isRefresh: true});
    Axios.get('https://www.moj.go.th/feeds/656?type=json').then(response => {
      this.setState({data: response.data.data, isRefresh: false});
    });
  }

  componentDidMount() {
    this._fetch();
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{flex: 1, margin: 5, backgroundColor: '#eee', borderRadius: 10}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Webview', {item: item})}>
          <Image
            source={{uri: item.image}}
            style={{
              height: 120,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Text
            numberOfLines={3}
            style={{
              padding: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <FlatList
          data={this.state.data}
          refreshing={this.state.isRefresh}
          onRefresh={() => this._fetch()}
          renderItem={object => this._renderItem(object)}
          keyExtractor={item => item.link}
          numColumns={2}
        />
      </View>
    );
  }
}
