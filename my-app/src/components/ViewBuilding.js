import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {

	removeBuilding() {
		this.props.removeListing(this.props.selectedBuilding);
	}

	render() {
		const { data, selectedBuilding } = this.props;

		let output = (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		let building = data.find((el) => el.id == selectedBuilding);
		if (building) {
			let coords = null;
			if (building.coordinates) {
				coords = (
					<div>
						<h3>Latitude - {building.coordinates.latitude}</h3>
						<h3>Longitude - {building.coordinates.longitude}</h3>
					</div>
				);
			}
			let addr = null;
			if (building.address) {
				addr = <h3>Address - {building.address}</h3>
			}
			output = (
				<div>
					<h3>ID - {building.id}</h3>
					<h3>Code - {building.code}</h3>
					<h3>Name - {building.name}</h3>
					{coords}
					{addr}
					<RemoveBuilding removeListing={this.removeBuilding.bind(this)}/>
				</div>
			);
		}
		
		return output;
	}
}
export default ViewBuilding;
