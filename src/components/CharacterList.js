import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends Component {
	constructor(props) {
		super(props);
	}

	addInvoice() {
		if(this.props.newInvoice !== '') {
			return (
				<tr>
					<th scope="row">10</th>
					<td contenteditable="true">{this.props.newInvoice}</td>
					<td contenteditable="true">Text Field</td>
					<td contenteditable="true">Description Field</td>
					<td contenteditable="true">1000</td>
					
				</tr>
			)
		}
	}

	render() { 
		  
		return(
			<div>
				<h4>General</h4>
				<ul>
					<table class="table">
						<thead>
					    	<tr>	
						    	<th scope="col">#</th>
								<th scope="col">Name</th>
						     	<th scope="col">Text</th>
						     	<th scope="col">Description</th>
								<th scope="col">Price</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							 
					{this.props.characters.map(({ id, name, text, description, price }) => {
						return ( 
							<tr>
					    		<th scope="row">{id}</th>
								<td contenteditable="true">{name}</td>
								<td contenteditable="true">{text}</td>
								<td contenteditable="true">{description}</td>
								<td contenteditable="true">{price}</td>
								<td onClick={() => this.props.addCharacterById(id)}>x</td>		 
							</tr>
						);
					})}		
					{this.addInvoice()}
							 
						</tbody>
					</table>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {			// push objects from store to props in component
	console.log('state', state);
	return {
		characters: state.characters
	};
}
 

export default connect(mapStateToProps, { addCharacterById })(CharacterList);