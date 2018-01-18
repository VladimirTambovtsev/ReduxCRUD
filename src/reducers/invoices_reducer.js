import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import characters_json from '../data/characters.json';


function createCharacter(id) {		// just a helper function
	let character = characters_json.find(character => character.id === id);
	return character;
}


function invoices(state = [], action) {
	switch(action.type) {
		case ADD_CHARACTER:
			let invoices = [...state, createCharacter(action.id)] 
			return invoices;
		case REMOVE_CHARACTER:
			invoices = state.filter(item => item.id !== action.id); // just add character in chracters list
			return invoices;
		default:
			return state;
	}
}


export default invoices;