import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from 'ag-grid-react';
import $ from 'jquery'

function onGridReadyFunct(){
$.ajax({url: 'https://jsonplaceholder.typicode.com/posts', success: function(result){
  //console.log(result >>>+)
        $("#div1").html(result);
    }});

}
class App extends Component {
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

   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    $.ajax({url: 'https://jsonplaceholder.typicode.com/posts', success: function(result){
  //console.log(result >>>+)
        $("#div1").html(result);

    }});

  } 

  render() {
    return (
      <div className="App">
        Pallavi
         /* <Grid>
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                        onGridReady={this.onGridReady.bind(this)}
                    </Grid>
        */
      </div>
    );
  }
}

export default App;
