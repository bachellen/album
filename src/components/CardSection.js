import React, { Component } from 'react';
import { View } from 'react-native';

class CardSection extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
            {this.props.children}
            </View>
        );
    }
}
const styles = {
    containerStyle: {
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#F2F3F3',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#C4C6C6',
        position: 'relative'
    }
};
export default CardSection;
