import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
 


class CreateInvoice extends Component {

  constructor(props) {
    super(props); 
    this.state = { textValue: null }

  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

 
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);  // push variables to Parent Component
  }

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h4>Create Invoice</h4>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="col-sm-11">
						<input type="text" value={this.state.email} onChange={e => this.setState({ textValue: e.target.value })} placeholder="Enter invoice.." />
					</div>
					<button className="btn btn-primary" type="submit">Add</button>
				</form>
			</div>
		);
	}
}
 

export default CreateInvoice;

