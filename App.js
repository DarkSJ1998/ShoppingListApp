/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItemComponent from './components/AddItemComponent';

class App extends Component {

	constructor() {
		super();
		this.state = {
			items: [
				{ id: uuid(), text: 'Milk' },
				{ id: uuid(), text: 'Eggs' },
				{ id: uuid(), text: 'Bread' },
				{ id: uuid(), text: 'Juice' }
			]
		}
	}

	render() {
		return (
			<View style={this.styles.container}>
				<Header title='Shopping List' />
				<AddItemComponent addItem={this.addItem} />
				<FlatList
					data={this.state.items}
					renderItem={({ item }) => <ListItem item={item} deleteItem={this.deleteItem} />}
				/>
			</View>
		);
	}

	addItem = (value) => {
		if (!value) {
			Alert.alert('Nothing Entered 😕', 'Please enter an item to add', [{ text: 'ok' }]);
			
		} else {
			this.setState({
				items: [
					...this.state.items,
					{
						id: uuid(),
						text: value
					}
				],
				newItemText: ''
			});
		}

	}

	deleteItem = (id) => {
		let newItems = this.state.items.filter(item => item.id !== id);
		this.setState({ items: newItems });
	}

	styles = StyleSheet.create({
		container: {
			flex: 1
		}
	});

}

export default App;
