import React, { Component } from "react";
import employees from "./employees.json";
import Table from "./components/table";


class App extends Component {

    state = {
        employees: employees
    };
    

    sortList = (option) => {
        employees.sort(function (a, b) {
            if (a[option] > b[option])
                return 1;
             
            else if (a[option] < b[option])
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
        <div class="btn-group-vertical">
        <button type="button" class="btn btn-secondary" onClick={() => this.sortList("firstName")} >First Name</button>
        <button type="button" class="btn btn-secondary" onClick={() => this.sortList("lastName")}>Last Name</button>
        <button type="button" class="btn btn-secondary" onClick={() => this.sortList("department")}>Department</button>
        </div>

         </div>
        )
    }
}

export default App;
