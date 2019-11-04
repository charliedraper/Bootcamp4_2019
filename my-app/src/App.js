import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingList: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      addBuilding: false
    };
  }

  handleAdd() {
    this.setState({addBuilding: true});
  }
  cancelListing() {
    this.setState({addBuilding: false});
  }

  addListing(building) {
    let buildingList = this.state.buildingList;
    building.id = buildingList[buildingList.length - 1].id + 1;
    buildingList.push(building);
    this.setState({buildingList: buildingList, addBuilding: false, selectedBuilding: building.id});
  }
  removeListing(id) {
    let buildingList = this.state.buildingList;
    const buildingIndex = buildingList.findIndex((el) => el.id == id);
    buildingList.splice(buildingIndex, 1);
    this.setState({buildingList: buildingList});
  }
  
  filterUpdate(value) {
    this.setState({filterText: value});
  }
  selectedUpdate(id) {
    this.setState({selectedBuilding: id});
  }

  render() {

    let buildingList = (
      <div>
        <Button onClick={this.handleAdd.bind(this)}>Add Building</Button>
        <tr>
          <b>&nbsp; Name &nbsp; &nbsp; &nbsp; Code</b>
        </tr>
        <BuildingList
          data={this.state.buildingList}
          filterText={this.state.filterText}
          selectedUpdate={this.selectedUpdate.bind(this)}
        />
      </div>
    );
    let buildingAdd = (
      <AddBuilding 
        addListing={this.addListing.bind(this)}
        cancelListing={this.cancelListing.bind(this)}
      />
    );
    let buildingView = (
      <ViewBuilding 
        data={this.state.buildingList}
        selectedBuilding={this.state.selectedBuilding}
        removeListing={this.removeListing.bind(this)}
      />
    );
    //Set the left side based on whether the user is adding a building or viewing the list
    let leftDisplay = this.state.addBuilding ? buildingAdd : buildingList;
    //Set the right side to the view of the selected building
    let rightDisplay = buildingView;
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  {leftDisplay}
                </table>
              </div>
            </div>
            <div className="column2">
              {rightDisplay}
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
