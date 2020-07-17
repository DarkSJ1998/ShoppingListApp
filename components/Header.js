import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

    render() {
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.text}>{this.props.title}</Text>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            height: 60,
            padding: 15,
            backgroundColor: 'darkslateblue'
        },
        text: {
            color: 'white',
            fontSize: 23,
            textAlign: 'center'
        }
    });
}

export default Header;