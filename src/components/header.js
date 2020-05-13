import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
     <Text style={textStyle}>{this.props.headerText}</Text>
     </View>
    );
  }
}
const styles = {
  textStyle: {
    fontSize: 25
  },
  viewStyle: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#D2DFDA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
  };
  
