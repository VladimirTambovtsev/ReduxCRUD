import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class DeletedInvoices extends Component {

	render() { 
		return (
			<div>
				
				<ul className="list-group">
					{this.props.invoices.map(({id, name}) => {
						return (
							<div class="alert alert-success" role="alert">
								<li key={id}  >
									<div className="list-item"><div>Removed Successfully: </div> <b>{name}</b></div>
									<div className="list-item right-button" onClick={() => this.props.removeCharacterById(id)}>X</div>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		invoices: state.invoices
	}
}



export default connect(mapStateToProps, { removeCharacterById })(DeletedInvoices);