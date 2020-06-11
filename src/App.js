import React, { Component } from "react";
import employees from "./employees.json";
import Table from "./components/table";


class App extends Component {

    state = {
        employees: employees
    };



render(){
    return (
         <div className="container">
        <Table employees={this.state.employees} />


         </div>
        )
    }
}

export default App;
