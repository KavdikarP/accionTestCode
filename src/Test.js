import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AgGridReact} from 'ag-grid-react';

class App1 extends Component {
constructor(props) {
        super(props);
this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
                
    }

   
  render() {
    return (
      <div>
       <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}/>
         </div>               
                    
            
    );
  }
}

export default App1;



