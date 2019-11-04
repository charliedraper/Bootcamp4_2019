import React from 'react';
import { Button } from 'react-bootstrap';

class ViewBuilding extends React.Component {

	removeBuilding() {
		this.props.removeListing(this.props.selectedBuilding);
	}

	render() {
		const { data, selectedBuilding } = this.props;

		//Default output when no building is selected
		let output = <i>Click on a name to view more information</i>

		//Find the building with the selected ID
		let building = data.find((el) => el.id == selectedBuilding);
		if (building) {
			let coords = building.coordinates ? <div><h4>Lat: {building.coordinates.latitude}</h4><h4>Lon: {building.coordinates.longitude}</h4></div> : null;
			let addr = building.address ? <h4>Address: {building.address}</h4> : null;
			//Set new HTML elements based on the selected building's properties
			output = (
				<div>
					<h1>Name: {building.name}</h1>
					<h2>Code: {building.code}</h2>
					<h3>ID: {building.id}</h3>
					{addr}
					{coords}
					<Button variant="danger" onClick={this.removeBuilding.bind(this)}>Remove Building</Button>
				</div>
			);
		}
		
		//Return the appropriate output
		return output;
	}
}
export default ViewBuilding;
