import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
	displayValue: '0',
	clearDisplay: false,
	operation: null,
	values: [0,0],
	current: 0
}

export default class App extends Component {

	state = {...initialState}

	addDigit = n => {
		if(n === '.' && this.state.displayValue.includes('.')){
			return 
		}

		const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
		const currentValue = clearDisplay ? '' : this.state.displayValue
		const displayValue = currentValue + n
		this.setState({displayValue, clearDisplay: false})

		if(n !== '.'){
			const newValue = parseFloat(displayValue)
			const values = [...this.state.values]
			values[this.state.current] = newValue
			this.setState({values})
		}
	}

	clearMemory = () => {
		this.setState({...initialState})
	}

	setOperation = operation => {

	}

	render(){
		return (
			<View style={styles.container}>
				<Display value={this.state.displayValue}></Display>
				<View style={styles.buttons}>
					<Button label='AC'onClick={this.clearMemory} />
					<Button label='±' onClick={() => this.setOperation('±')}/>
					<Button label='%' onClick={() => this.setOperation('%')}/>
					<Button label='÷' onClick={() => this.setOperation('/')} operation={true}/>
					<Button label='7' onClick={() => this.addDigit('7')}/>
					<Button label='8' onClick={() => this.addDigit('8')}/>
					<Button label='9' onClick={() => this.addDigit('9')}/>
					<Button label='x' onClick={() => this.setOperation('*')} operation={true}/>
					<Button label='4' onClick={() => this.addDigit('6')}/>
					<Button label='5' onClick={() => this.addDigit('5')}/>
					<Button label='6' onClick={() => this.addDigit('4')}/>
					<Button label='-' onClick={() => this.setOperation('-')} operation={true}/>
					<Button label='1' onClick={() => this.addDigit('3')}/>
					<Button label='2' onClick={() => this.addDigit('2')}/>
					<Button label='3' onClick={() => this.addDigit('1')}/>
					<Button label='+' onClick={() => this.setOperation('+')} operation={true}/>
					<Button label='0' onClick={() => this.addDigit('0')} double={true}/>
					<Button label='.' onClick={() => this.addDigit('.')}/>
					<Button label='=' onClick={() => this.setOperation('=')} operation={true}/>
				</View>
			</View>
		);
	}
  
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});