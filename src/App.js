import React, { Component } from "react";
import employees from "./employees.json";
import Table from "./components/table";


class App extends Component {

    state = {
        employees: employees
    };


    // Sorts the table for the onClick
    sortList = (sort) => {
        employees.sort(function (a, b) {
            if (a[sort] > b[sort])
                return 1;
             
            if (a[sort] < b[sort])
                return -1;

            return 0;
        });

        this.setState({
            employees: employees
        });
    }


    
render(){
    return (
         <div className="container">
        <Table employees={this.state.employees} />
        <div className="btn-group-vertical">
        <button type="button" className="btn btn-secondary" onClick={() => this.sortList("id")} >ID</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.sortList("firstName")} >First Name</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.sortList("lastName")}>Last Name</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.sortList("phone")}>Phone Number</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.sortList("department")}>Department</button>
        </div>

         </div>
        )
    }
}

export default App;
