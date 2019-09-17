import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';

export default class WebviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      visible: true,
    };
  }

  componentDidMount() {
    const item = this.props.navigation.getParam('item', null);
    this.setState({item});
  }

  hideSpinner() {
    this.setState({visible: false});
  }

  showSpinner() {
    this.setState({visible: true});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{uri: this.state.item.link + '?ismobile=1'}}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{
              flex: 1,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
          />
        )}
      </View>
    );
  }
}
