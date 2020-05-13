import React, { Component } from 'react';
import { View } from 'react-native';


class Card extends Component {
 render() {
     const { containerStyle } = styles;
return (
<View style={containerStyle}>{this.props.children}</View>
);
 }
}
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#A8B2AE',
        borderBottomWidth: 0,
        shadowColor: '#D2DFDA',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
export default Card;
