import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		this.props.filterUpdate(this.filter.value);
	}
	render() {
	
		return (
			<form>
				<input 
					type="text" 
					placeholder="Type to Filter"
					ref={ (value) => { this.filter = value } }
            		onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
