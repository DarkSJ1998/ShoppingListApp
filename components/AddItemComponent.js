import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class AddItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newItemText: ''
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={this.styles.input}
                    onChangeText={(value) => this.handleInput(value)}
                    defaultValue={this.state.newItemText}
                    placeholder='Add Item...'
                    autoFocus
                />
                <TouchableOpacity
                    style={this.styles.btn}
                    onPress={() => this.props.addItem(this.state.newItemText)}
                >
                    <Text style={this.styles.btnText}><Icon name="plus" size={20} />Add Item</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleInput = (value) => {
        this.setState({
            newItemText: value
        });
    }

    styles = StyleSheet.create({
        input: {
            height: 60,
            padding: 8,
            fontSize: 16
        },
        btn: {
            backgroundColor: '#c2bad8',
            padding: 9,
            margin: 5
        },
        btnText: {
            color: 'darkslateblue',
            fontSize: 20,
            textAlign: 'center'
        }
    });

}

export default AddItemComponent;