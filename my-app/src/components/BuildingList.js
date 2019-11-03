import React from 'react';

class BuildingList extends React.Component {

	selectedUpdate = (e) => {
		this.props.selectedUpdate(e.currentTarget.getAttribute('id'));
	}

	render() {
		const { data, filterText } = this.props;

		const buildingList = data
		.filter(directory => {
			const codeMatch = directory.code.toLowerCase().indexOf(filterText.toLowerCase());
			const nameMatch = directory.name.toLowerCase().indexOf(filterText.toLowerCase());
			return (codeMatch >= 0 || nameMatch >= 0);
		})
		.map(directory => {
			return (
				<tr 
					key={directory.id}
					id={directory.id}
					onClick={this.selectedUpdate.bind(this)}
				>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
