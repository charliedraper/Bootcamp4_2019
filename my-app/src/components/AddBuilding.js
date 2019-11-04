import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    handleAdd() {
        if (this.name.value && this.code.value) {
            let building = {
                code: this.code.value,
                name: this.name.value,
                address: this.addr.value,
                coordinates: {
                    latitude: this.lat.value,
                    longitude: this.lon.value
                }
            };
            this.props.addListing(building);
        } else {
            this.setState({error: true});
        }
    }

    render() {

        let error = this.state.error ? <p className="error-text">Please enter a name and a code</p> : null;

        return (
            <div>
                <input type="text" placeholder="Enter name" ref= { (value) => { this.name = value } }/>
                <input type="text" placeholder="Enter code" ref= { (value) => { this.code = value } }/>
                <input type="text" placeholder="Enter address" ref= { (value) => { this.addr = value } }/>
                <input type="text" placeholder="Enter latitude" ref= { (value) => { this.lat = value } }/>
                <input type="text" placeholder="Enter longitude" ref= { (value) => { this.lon = value } }/>
                {error}
                <Button variant="success" onClick={this.handleAdd.bind(this)}>Add</Button>
                <Button variant="light" onClick={this.props.cancelListing}>Cancel</Button>
            </div>
        )
    }
}

export default AddBuilding;