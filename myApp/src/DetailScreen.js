import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import myJSON from './LocalFile/jsonData';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.DATA = [];
    this.DATA_Refresh = [];
  }

  componentWillMount() {
    const page = this.props.navigation.getParam('page', 'NO-ID');
    this.DATA = myJSON[page];
    this.DATA_Refresh = myJSON[page];
  }

  _renderItem({item, index}) {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          margin: 5,
          backgroundColor: '#eee',
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('View', {item: item})}>
          <Image
            source={{uri: item.thumbnail}}
            style={{
              height: 120,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Text numberOfLines={2} style={{padding: 10}}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _reFresh() {
    // this.DATA = [];
    // this.DATA = this.DATA_Refresh;
    alert('sa');
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <FlatList
          refreshing={false}
          onRefresh={() => {this.DATA = []; this.DATA = this.DATA_Refresh}}
          data={this.DATA}
          renderItem={object => this._renderItem(object)}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }
}
