import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

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

  addListing(building) {
    var buildingList = this.state.buildingList;
    building.id = buildingList.length + 1;
    buildingList.push(building);
    this.setState({buildingList: buildingList, addBuilding: false});
  }
  removeListing(id) {
    var buildingList = this.state.buildingList;
    let buildingIndex = buildingList.findIndex((el) => el.id == id);
    buildingList.splice(buildingIndex, 1);
    this.setState({buildingList: buildingList});
  }
  cancelListing() {
    this.setState({addBuilding: false});
  }
  

  filterUpdate(value) {
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    this.setState({selectedBuilding: id});
  }

  render() {

    let buildingList = (
      <BuildingList
        data={this.state.buildingList}
        filterText={this.state.filterText}
        selectedUpdate={this.selectedUpdate.bind(this)}
      />
    );
    let buildingAdd = (
      <AddBuilding 
        addListing={this.addListing.bind(this)}
        cancelListing={this.cancelListing.bind(this)}
      />
    );
    let leftDisplay = this.state.addBuilding ? buildingAdd : buildingList;
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <button onClick={this.handleAdd.bind(this)}>Add Building</button>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  {leftDisplay}
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.buildingList}
                selectedBuilding={this.state.selectedBuilding}
                removeListing={this.removeListing.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
