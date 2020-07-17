import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class ListItem extends Component {

    render() {
        return (
            <TouchableOpacity style={this.styles.listItem}>
                <View style={this.styles.listItemView}>
                    <Text style={this.styles.listItemText}>{this.props.item.text}</Text>
                    <Icon name="remove" size={20} color="firebrick" onPress={() => this.props.deleteItem(this.props.item.id)} />
                </View>
            </TouchableOpacity>
        );
    }

    styles = StyleSheet.create({
        listItem: {
            padding: 15,
            backgroundColor: '#f8f8f8',
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
        },
        listItemView: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        listItemText: {}
    });
}

export default ListItem;