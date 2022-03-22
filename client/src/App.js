import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import DeviceInventory from './views/DeviceInventory';
import AddDeviceForm from './views/AddDeviceForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" default />
        <DeviceInventory path="/deviceinventory" />
        <AddDeviceForm path="/AddDeviceForm" />
      </Router>
    </div>
  );
}

export default App;
