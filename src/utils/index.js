import React, { Component } from "react";
import employees from "../employees.json";
import Table from "../components/table";

class Sort extends Component {
    state = {
        department: "",
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

    generateOptions = () => {
        let departmentOptions = [];
        employees.forEach(function (data) {
            if (!departmentOptions.includes(data["department"])) {
                departmentOptions.push(data["department"]);
            } 
        });
  
        departmentOptions.sort();
        return departmentOptions.map(data => {
          let rando = Math.floor(Math.random()*1000)
           return <option key={rando}>{data}</option>
  
       
        });
    };

    handleChange = event => {
        let value = event.target.value;
  
        console.log(value)
        this.setState({
            department: value
        });
    }

    handleSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // filter by department
        const departmentFilter = employees.filter(employees => employees.department === this.state.department);
        
        console.log(departmentFilter)
        this.setState({
            employees: departmentFilter
        });
    };
    
    render() {
        return (
<div>

<div className="form-group">
      <h1>Filter By Department</h1>
      <select className="form-control" id="department" onChange={this.handleChange}>
       <option>Choose</option>
       {this.generateOptions()}
      </select>
      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </div>


    <div className="btn-group-vertical">
    <button type="button" className="btn btn-secondary" onClick={() => this.sortList("id")} >ID</button>
    <button type="button" className="btn btn-secondary" onClick={() => this.sortList("firstName")} >First Name</button>
    <button type="button" className="btn btn-secondary" onClick={() => this.sortList("lastName")}>Last Name</button>
    <button type="button" className="btn btn-secondary" onClick={() => this.sortList("phone")}>Phone Number</button>
    <button type="button" className="btn btn-secondary" onClick={() => this.sortList("department")}>Department</button>
    </div>

    <div>
     <Table employees={this.state.employees} />
     </div>
</div>
)}
}
export default Sort