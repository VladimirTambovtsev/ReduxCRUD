import React, { Component } from 'react';

import CharacterList from './CharacterList';
import DeletedInvoices from './DeletedInvoices';
import CreateInvoice from './CreateInvoice' 

import '../styles/index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {textValue: ''}
	}

	onSubmit({ textValue }) { // get variables from Child component
		console.log('App props: ', textValue);
		this.setState({ textValue: textValue });
	}

	render() {
		console.log('App props: ', this.props);
		var textValue = textValue || '';
		return (
			<div className="App">
				<h3>Invoices</h3>

				<div className="container margin">
					<CreateInvoice onSubmit={this.onSubmit.bind(this)} />
				</div>
				<div className="col-md-12">
					<CharacterList newInvoice={this.state.textValue} />
				</div>
				<div className="col-md-12">
					<DeletedInvoices /> 
				</div>
			</div>
		)
	}
}

export default App;